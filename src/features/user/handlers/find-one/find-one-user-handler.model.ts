import { FindOneUserQuery } from './find-one-user.query';

import { UserModel } from '../../models/user.model';
import { Maybe } from '@src/common/lib/maybe.lib';
export interface FindOneUserHandlerModel {
  execute(command: FindOneUserQuery): Promise<Maybe<UserModel>>;
}
