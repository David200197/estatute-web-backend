import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { AuthModel } from '../../models/auth.model';

export class RemoveAuthCommand {
  constructor(public readonly filter: DeepPartial<AuthModel>) {}
}
