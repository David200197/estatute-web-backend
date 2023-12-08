import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RefreshAuthCommand } from './refresh-auth.command';
import { RefreshAuthHandlerModel } from './refresh-auth-handler.model';
import { RefreshAuthResponseDto } from '../../dto/refresh-auth-response.dto';

@CommandHandler(RefreshAuthCommand)
export class RefreshAuthHandler
  implements RefreshAuthHandlerModel, ICommandHandler<RefreshAuthCommand>
{
  execute({
    refreshAuthDto,
  }: RefreshAuthCommand): Promise<RefreshAuthResponseDto> {
    throw new Error('not implements');
  }
}
