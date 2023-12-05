import { CreateAdminCommand } from './create-admin.command';
import { AdminModel } from '../../models/admin.model';
export interface CreateAdminHandlerModel {
  execute(command: CreateAdminCommand): Promise<AdminModel>;
}
