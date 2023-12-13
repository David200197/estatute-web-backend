import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RefreshAuthCommand } from './refresh-auth.command';
import { RefreshAuthHandlerModel } from './refresh-auth-handler.model';
import { RefreshAuthResponseDto } from '../../dto/refresh-auth-response.dto';
import { ForbiddenException, HttpException, Inject } from '@nestjs/common';
import { Either } from '@src/common/lib/either.lib';
import { emitter, responseListeners } from '@src/common/constants/emitters';
import { EVENT_EMITTER_SERVICE_TOKEN } from '@src/shared/event-emitter/event-emitter-service.provider';
import { EventEmitterServiceModel } from '@src/shared/event-emitter/event-emitter-service.model';
import { AdminModel } from '@src/features/admin/models/admin.model';
import { HASH_PASSWORD_SERVICE_TOKEN } from '@src/shared/hash-password/hash-password-service.provider';
import { HashPasswordServiceModel } from '@src/shared/hash-password/hash-password-helper.service';
import { LoginAuthResponseDto } from '../../dto/login-auth-response.dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@CommandHandler(RefreshAuthCommand)
export class RefreshAuthHandler
  implements RefreshAuthHandlerModel, ICommandHandler<RefreshAuthCommand>
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
    refreshAuthDto,
  }: RefreshAuthCommand): Promise<
    Either<HttpException, RefreshAuthResponseDto>
  > {
    const { admin, refreshToken } = refreshAuthDto;
    const listener = await this.eventEmitterService.emitAsync(
      emitter.authValidateAdmin,
      { username: admin.username },
    );
    const adminEither = listener.get<Either<HttpException, AdminModel>>(
      responseListeners.adminAuthValidateAdmin,
    );
    const verifiedAdmin = await adminEither.flatMapAsync<AdminModel>(
      async (user) => {
        if (!user.refreshToken)
          return Either.left(new ForbiddenException('admin access denied'));
        const isValid = await this.hashPasswordService.verify(
          user.refreshToken,
          refreshToken,
        );
        if (!isValid)
          return Either.left(new ForbiddenException('admin access denied'));
        return Either.right(user);
      },
    );

    const payload = verifiedAdmin.map<LoginAuthResponseDto>(() => ({
      accessToken: this.jwtService.sign(
        { username: admin.username },
        {
          privateKey: this.configService.get('jwt.secret'),
          expiresIn: this.configService.get('jwt.time'),
        },
      ),
      refreshToken: this.jwtService.sign(
        { username: admin.username },
        {
          privateKey: this.configService.get('jwt.refresh_secret'),
          expiresIn: this.configService.get('jwt.refresh_time'),
        },
      ),
    }));

    return await payload.flatMapAsync<LoginAuthResponseDto>(async (tokens) => {
      const refreshTokenHashed = await this.hashPasswordService.hash(
        tokens.refreshToken,
      );
      const listener = await this.eventEmitterService.emitAsync(
        emitter.authUpdateRefreshToken,
        { username: admin.username },
        refreshTokenHashed,
      );
      const updatedAdmin = listener.get<Either<HttpException, AdminModel>>(
        responseListeners.adminAuthUpdateRefreshToken,
      );
      if (updatedAdmin.isLeft()) return updatedAdmin.leftEither();
      return Either.right(tokens);
    });
  }
}
