import { FindOneAnniversaryQuery } from './find-one-anniversary.query';

import { AnniversaryModel } from '../../models/anniversary.model';
import { Maybe } from '@src/common/lib/maybe.lib';
export interface FindOneAnniversaryHandlerModel {
  execute(command: FindOneAnniversaryQuery): Promise<Maybe<AnniversaryModel>>;
}
