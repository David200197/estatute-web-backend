import { RemoveAuthCommand } from './remove-auth.command';
import { AuthModel } from '../../models/auth.model';
export interface RemoveAuthHandlerModel {
  execute(command: RemoveAuthCommand): Promise<AuthModel>;
}
