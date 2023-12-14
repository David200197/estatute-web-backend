import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LogoutAuthCommand } from './logout-auth.command';
import { LogoutAuthHandlerModel } from './logout-auth-handler.model';
import { HttpException, Inject } from '@nestjs/common';
import { Either } from '@src/common/lib/either.lib';
import { AUTH_UTILS_SERVICE_MODEL } from '../../providers/auth-util-service.provider';
import { AuthUtilServiceModel } from '../../models/auth-util-service.model';

@CommandHandler(LogoutAuthCommand)
export class LogoutAuthHandler
  implements LogoutAuthHandlerModel, ICommandHandler<LogoutAuthCommand>
{
  constructor(
    @Inject(AUTH_UTILS_SERVICE_MODEL)
    private readonly authUtilsService: AuthUtilServiceModel,
  ) {}

  async execute(
    logoutAuthCommand: LogoutAuthCommand,
  ): Promise<Either<HttpException, void>> {
    const { logoutAuthDto } = logoutAuthCommand;
    const { admin } = logoutAuthDto;
    const validatedAdmin = await this.authUtilsService.validateAdmin({
      username: admin.username,
    });
    if (validatedAdmin.isLeft())
      return Either.left(validatedAdmin.getLeftOrElse(null));
    const updatedAdmin = await this.authUtilsService.updateRefreshToken(
      { username: admin.username },
      null,
    );
    if (updatedAdmin.isLeft())
      return Either.left(updatedAdmin.getLeftOrElse(null));
  }
}
