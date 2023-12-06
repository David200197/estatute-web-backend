import { RefreshAuthDto } from '../../dto/refresh-auth.dto';

export class RefreshAuthCommand {
  constructor(readonly refreshAuthDto: RefreshAuthDto) {}
}
