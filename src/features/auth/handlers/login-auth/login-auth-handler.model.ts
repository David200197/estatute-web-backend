import { LoginAuthResponseDto } from '../../dto/login-auth-response.dto';
import { LoginAuthCommand } from './login-auth.command';
export interface LoginAuthHandlerModel {
  execute(loginAuthCommand: LoginAuthCommand): Promise<LoginAuthResponseDto>;
}
