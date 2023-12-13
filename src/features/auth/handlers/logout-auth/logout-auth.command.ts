import { LogoutAuthDto } from '../../dto/logout-auth.dto';

export class LogoutAuthCommand {
  constructor(readonly logoutAuthDto: LogoutAuthDto) {}
}
