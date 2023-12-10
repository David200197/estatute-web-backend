import { RemoveAdminCommand } from './remove-admin.command';

import { AdminModel } from '../../models/admin.model';
import { Either } from '@src/common/lib/either.lib';
import { HttpException } from '@nestjs/common';
import { ICommandHandler } from '@nestjs/cqrs';

export interface RemoveAdminHandlerModel
  extends ICommandHandler<RemoveAdminCommand> {
  execute(
    command: RemoveAdminCommand,
  ): Promise<Either<HttpException, AdminModel>>;
}
