import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { UserModel } from '../../models/user.model';

export class FindOneUserQuery {
  constructor(public readonly filter: DeepPartial<UserModel>) {}
}
