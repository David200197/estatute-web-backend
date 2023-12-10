import { CreateAdminCommand } from './create-admin.command';

import { AdminModel } from '../../models/admin.model';
import { ICommandHandler } from '@nestjs/cqrs';

export interface CreateAdminHandlerModel
  extends ICommandHandler<CreateAdminCommand> {
  execute(command: CreateAdminCommand): Promise<AdminModel>;
}
