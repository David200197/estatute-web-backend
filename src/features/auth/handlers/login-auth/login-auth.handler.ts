import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LoginAuthCommand } from './login-auth.command';
import { LoginAuthHandlerModel } from './login-auth-handler.model';
import { Inject } from '@nestjs/common';
import { AUTH_HELPER_TOKEN } from '../../providers/auth-helper.provider';
import { AuthHelperModel } from '../../models/auth-helper.model';
import { LoginAuthResponseDto } from '../../dto/login-auth-response.dto';

@CommandHandler(LoginAuthCommand)
export class LoginAuthHandler
  implements LoginAuthHandlerModel, ICommandHandler<LoginAuthCommand>
{
  constructor(
    @Inject(AUTH_HELPER_TOKEN) private readonly authHelper: AuthHelperModel,
  ) {}

  execute({ loginAuthDto }: LoginAuthCommand): Promise<LoginAuthResponseDto> {
    return Promise.resolve({
      accessToken: '',
      refreshToken: '',
    });
  }
}
