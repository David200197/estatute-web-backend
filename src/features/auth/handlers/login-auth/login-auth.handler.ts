import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LoginAuthCommand } from './login-auth.command';
import { LoginAuthHandlerModel } from './login-auth-handler.model';
import { LoginAuthResponseDto } from '../../dto/login-auth-response.dto';
import { AdminModel } from '@src/features/admin/models/admin.model';
import { EMITTER, RESPONSE_LISTENERS } from '@src/common/constants/emitters';
import { EventEmitterHelperModel } from '@src/shared/event-emitter/event-emitter-helper.model';
import { HttpException, Inject } from '@nestjs/common';
import { EVENT_EMITTER_HELPER_TOKEN } from '@src/shared/event-emitter/event-emitter-helper.provider';
import { Either } from '@src/common/lib/either.lib';
import { HashPasswordHelperModel } from '@src/shared/hash-password/hash-password-helper.model';
import { HASH_PASSWORD_HELPER_TOKEN } from '@src/shared/hash-password/hash-password-helper.provider';
import { JwtService } from '@nestjs/jwt';

@CommandHandler(LoginAuthCommand)
export class LoginAuthHandler
  implements LoginAuthHandlerModel, ICommandHandler<LoginAuthCommand>
{
  constructor(
    @Inject(EVENT_EMITTER_HELPER_TOKEN)
    private eventEmitter: EventEmitterHelperModel,
    @Inject(HASH_PASSWORD_HELPER_TOKEN)
    private hashPassword: HashPasswordHelperModel,
    private jwtService: JwtService,
  ) {}

  async execute({
    loginAuthDto,
  }: LoginAuthCommand): Promise<Either<HttpException, LoginAuthResponseDto>> {
    const { password, username } = loginAuthDto;
    const listener = await this.eventEmitter.emitAsync(
      EMITTER.AUTH_LOGIN_VALIDATE_ADMIN,
      username,
    );
    const { admin } = listener.getData<{
      admin: Either<HttpException, AdminModel>;
    }>(RESPONSE_LISTENERS.ADMIN_AUTH_LOGIN_VALIDATE_ADMIN);

    return admin.map((data) => {
      return {
        accessToken: '',
        refreshToken: '',
      };
    });
  }
}
