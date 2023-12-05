import { FindOneAdminQuery } from './find-one-admin.query';

import { AdminModel } from '../../models/admin.model';
import { Maybe } from '@src/common/lib/maybe.lib';
export interface FindOneAdminHandlerModel {
  execute(command: FindOneAdminQuery): Promise<Maybe<AdminModel>>;
}
