import { UpdateAdminCommand } from './update-admin.command';
import { AdminModel } from '../../models/admin.model';
export interface UpdateAdminHandlerModel {
  execute(command: UpdateAdminCommand): Promise<AdminModel>;
}
