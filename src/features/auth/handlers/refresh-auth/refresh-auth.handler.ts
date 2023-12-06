import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RefreshAuthCommand } from './refresh-auth.command';
import { RefreshAuthHandlerModel } from './refresh-auth-handler.model';
import { RefreshAuthResponseDto } from '../../dto/refresh-auth-response.dto';
import { Inject } from '@nestjs/common';
import { AUTH_HELPER_TOKEN } from '../../providers/auth-helper.provider';
import { AuthHelperModel } from '../../models/auth-helper.model';

@CommandHandler(RefreshAuthCommand)
export class RefreshAuthHandler
  implements RefreshAuthHandlerModel, ICommandHandler<RefreshAuthCommand>
{
  constructor(
    @Inject(AUTH_HELPER_TOKEN) private readonly authHelper: AuthHelperModel,
  ) {}

  execute({
    refreshAuthDto,
  }: RefreshAuthCommand): Promise<RefreshAuthResponseDto> {
    throw new Error('not implements');
  }
}
