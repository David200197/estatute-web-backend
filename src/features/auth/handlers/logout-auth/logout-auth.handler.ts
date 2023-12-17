import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LogoutAuthCommand } from './logout-auth.command';
import { LogoutAuthHandlerModel } from './logout-auth-handler.model';
import { HttpException, Inject } from '@nestjs/common';
import { Either } from '@src/common/lib/either.lib';
import { ADMIN_SERVICE_TOKEN } from '../../providers/admin-service.provider';
import { AdminServiceModel } from '../../models/admin-service.model';

@CommandHandler(LogoutAuthCommand)
export class LogoutAuthHandler
  implements LogoutAuthHandlerModel, ICommandHandler<LogoutAuthCommand>
{
  constructor(
    @Inject(ADMIN_SERVICE_TOKEN)
    private readonly adminService: AdminServiceModel,
  ) {}

  async execute(
    logoutAuthCommand: LogoutAuthCommand,
  ): Promise<Either<HttpException, void>> {
    const { logoutAuthDto } = logoutAuthCommand;
    const { admin } = logoutAuthDto;
    const updatedAdmin = await this.adminService.updateRefreshToken(
      { username: admin.username },
      null,
    );
    if (updatedAdmin.isRight()) return;
    return Either.left(updatedAdmin.getLeftOrElse(null));
  }
}
