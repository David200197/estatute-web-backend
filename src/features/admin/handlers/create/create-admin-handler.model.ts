import { CreateAdminCommand } from './create-admin.command';

import { AdminModel } from '../../models/admin.model';
import { ICommandHandler } from '@nestjs/cqrs';
import { Either } from '@src/common/lib/either.lib';
import { HttpException } from '@nestjs/common';

export interface CreateAdminHandlerModel
  extends ICommandHandler<CreateAdminCommand> {
  execute(
    command: CreateAdminCommand,
  ): Promise<Either<HttpException, AdminModel>>;
}
