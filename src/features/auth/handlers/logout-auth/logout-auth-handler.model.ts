import { LogoutAuthCommand } from './logout-auth.command';
export interface LogoutAuthHandlerModel {
  execute({}: LogoutAuthCommand): Promise<any>;
}
