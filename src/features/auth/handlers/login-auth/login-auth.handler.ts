import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LoginAuthCommand } from './login-auth.command';
import { LoginAuthHandlerModel } from './login-auth-handler.model';
import { LoginAuthResponseDto } from '../../dto/login-auth-response.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { AdminModel } from '@src/features/admin/models/admin.model';
import { EMITTER, RESPONSE_LISTENERS } from '@src/common/constants/emitters';
import { ListenerResponse } from '@src/common/lib/listener-response.lib';
import { ListenerSerializer } from '@src/common/lib/listener-serializer.lib';
import { Maybe } from '@src/common/lib/maybe.lib';

@CommandHandler(LoginAuthCommand)
export class LoginAuthHandler
  implements LoginAuthHandlerModel, ICommandHandler<LoginAuthCommand>
{
  constructor(private eventEmitter: EventEmitter2) {}

  async execute({
    loginAuthDto,
  }: LoginAuthCommand): Promise<LoginAuthResponseDto> {
    const responses: ListenerResponse[] = await this.eventEmitter.emitAsync(
      EMITTER.AUTH_LOGIN_VALIDATE_ADMIN,
    );
    const admin = new ListenerSerializer(responses).getData<Maybe<AdminModel>>(
      RESPONSE_LISTENERS.ADMIN_AUTH_LOGIN_VALIDATE_ADMIN,
    );
    console.log(admin);
    return Promise.resolve({
      accessToken: '',
      refreshToken: '',
    });
  }
}
