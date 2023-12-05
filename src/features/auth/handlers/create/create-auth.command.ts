import { CreateAuthDto } from '../../dto/create-auth.dto';

export class CreateAuthCommand {
  constructor(public readonly createAuthDto: CreateAuthDto) {}
}
