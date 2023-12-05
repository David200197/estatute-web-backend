import { UpdateUserCommand } from './update-user.command';
import { UserModel } from '../../models/user.model';
export interface UpdateUserHandlerModel {
  execute(command: UpdateUserCommand): Promise<UserModel>;
}
