import { UpdateAuthCommand } from './update-auth.command';
import { AuthModel } from '../../models/auth.model';
export interface UpdateAuthHandlerModel {
  execute(command: UpdateAuthCommand): Promise<AuthModel>;
}
