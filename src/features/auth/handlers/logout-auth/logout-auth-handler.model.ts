import { HttpException } from '@nestjs/common';
import { LogoutAuthCommand } from './logout-auth.command';
import { Either } from '@src/common/lib/either.lib';

export interface LogoutAuthHandlerModel {
  execute(
    logoutAuthCommand: LogoutAuthCommand,
  ): Promise<Either<HttpException, void>>;
}
