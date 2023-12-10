import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LogoutAuthCommand } from './logout-auth.command';
import { LogoutAuthHandlerModel } from './logout-auth-handler.model';

@CommandHandler(LogoutAuthCommand)
export class LogoutAuthHandler
  implements LogoutAuthHandlerModel, ICommandHandler<LogoutAuthCommand>
{
  execute(logoutAuthCommand: LogoutAuthCommand): Promise<any> {
    throw new Error('not implements');
  }
}
