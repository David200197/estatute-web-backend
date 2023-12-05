import { RemoveAdminCommand } from './remove-admin.command';
import { AdminModel } from '../../models/admin.model';
export interface RemoveAdminHandlerModel {
  execute(command: RemoveAdminCommand): Promise<AdminModel>;
}
