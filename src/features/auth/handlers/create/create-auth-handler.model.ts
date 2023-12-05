import { CreateAuthCommand } from './create-auth.command';
import { AuthModel } from '../../models/auth.model';
export interface CreateAuthHandlerModel {
  execute(command: CreateAuthCommand): Promise<AuthModel>;
}
