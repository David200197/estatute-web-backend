import { FindOneAuthQuery } from './find-one-auth.query';

import { AuthModel } from '../../models/auth.model';
import { Maybe } from '@src/common/lib/maybe.lib';
export interface FindOneAuthHandlerModel {
  execute(command: FindOneAuthQuery): Promise<Maybe<AuthModel>>;
}
