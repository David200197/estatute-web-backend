import { UpdateAdminCommand } from './update-admin.command';

import { AdminModel } from '../../models/admin.model';
import { Either } from '@src/common/lib/either.lib';
import { HttpException } from '@nestjs/common';
import { ICommandHandler } from '@nestjs/cqrs';

export interface UpdateAdminHandlerModel
  extends ICommandHandler<UpdateAdminCommand> {
  execute(
    command: UpdateAdminCommand,
  ): Promise<Either<HttpException, AdminModel>>;
}
