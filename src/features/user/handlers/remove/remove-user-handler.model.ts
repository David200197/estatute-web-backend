import { RemoveUserCommand } from './remove-user.command';
import { UserModel } from '../../models/user.model';
export interface RemoveUserHandlerModel {
  execute(command: RemoveUserCommand): Promise<UserModel>;
}
