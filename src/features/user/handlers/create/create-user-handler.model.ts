import { CreateUserCommand } from './create-user.command';
import { UserModel } from '../../models/user.model';
export interface CreateUserHandlerModel {
  execute(command: CreateUserCommand): Promise<UserModel>;
}
