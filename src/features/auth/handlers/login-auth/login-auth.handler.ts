import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LoginAuthCommand } from './login-auth.command';
import { LoginAuthHandlerModel } from './login-auth-handler.model';
import { LoginAuthResponseDto } from '../../dto/login-auth-response.dto';
import { AdminModel } from '@src/features/admin/models/admin.model';
import { emitter, responseListeners } from '@src/common/constants/emitters';
import { EventEmitterServiceModel } from '@src/shared/event-emitter/event-emitter-service.model';
import { HttpException, Inject } from '@nestjs/common';
import { EVENT_EMITTER_SERVICE_TOKEN } from '@src/shared/event-emitter/event-emitter-service.provider';
import { Either } from '@src/common/lib/either.lib';
import { HashPasswordServiceModel } from '@src/shared/hash-password/hash-password-helper.service';
import { HASH_PASSWORD_SERVICE_TOKEN } from '@src/shared/hash-password/hash-password-service.provider';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AdminUnauthorizedException } from '@src/features/admin/exceptions/admin-unauthorized.exception';

@CommandHandler(LoginAuthCommand)
export class LoginAuthHandler
  implements LoginAuthHandlerModel, ICommandHandler<LoginAuthCommand>
{
  constructor(
    @Inject(EVENT_EMITTER_SERVICE_TOKEN)
    private readonly eventEmitterService: EventEmitterServiceModel,
    @Inject(HASH_PASSWORD_SERVICE_TOKEN)
    private readonly hashPasswordService: HashPasswordServiceModel,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async execute({
    loginAuthDto,
  }: LoginAuthCommand): Promise<Either<HttpException, LoginAuthResponseDto>> {
    const { password, username } = loginAuthDto;
    const listener = await this.eventEmitterService.emitAsync(
      emitter.authLoginValidateAdmin,
      username,
    );
    const admin = listener.get<Either<HttpException, AdminModel>>(
      responseListeners.adminAuthLoginValidateAdmin,
    );

    const verifiedAdmin = await admin.flatMapAsync<AdminModel>(async (user) => {
      const isValid = this.hashPasswordService.verify(user.password, password);
      if (!isValid) return Either.left(new AdminUnauthorizedException());
      return Either.right(user);
    });

    const payload = verifiedAdmin.map((user) => ({
      accessToken: this.jwtService.sign(
        { username: user.username },
        {
          privateKey: this.configService.get('jwt.secret'),
          expiresIn: this.configService.get('jwt.time'),
        },
      ),
      refreshToken: this.jwtService.sign(
        { username: user.username },
        {
          privateKey: this.configService.get('jwt.refresh_secret'),
          expiresIn: this.configService.get('jwt.refresh_time'),
        },
      ),
    }));

    payload.map((tokens) =>
      this.eventEmitterService.emitSync(
        emitter.authLoginUpdateRefreshToken,
        username,
        tokens.refreshToken,
      ),
    );

    return payload;
  }
}
