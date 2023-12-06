import { LoginAuthDto } from '../../dto/login-auth.dto';

export class LoginAuthCommand {
  constructor(readonly loginAuthDto: LoginAuthDto) {}
}
