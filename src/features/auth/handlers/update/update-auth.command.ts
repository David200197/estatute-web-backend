import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { UpdateAuthDto } from '../../dto/update-auth.dto';
import { AuthModel } from '../../models/auth.model';

export class UpdateAuthCommand {
  constructor(
    public readonly filter: DeepPartial<AuthModel>,
    public readonly updateAuthDto: UpdateAuthDto,
  ) {}
}
