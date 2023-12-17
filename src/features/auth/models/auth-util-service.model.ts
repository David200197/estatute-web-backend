import { LoginAuthResponseDto } from '../dto/login-auth-response.dto';

export interface AuthUtilServiceModel {
  getTokens(username: string): LoginAuthResponseDto;
}
