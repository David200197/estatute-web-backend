import { FindOneStatuteQuery } from './find-one-statute.query';

import { StatuteModel } from '../../models/statute.model';
import { Maybe } from '@src/common/lib/maybe.lib';
export interface FindOneStatuteHandlerModel {
  execute(command: FindOneStatuteQuery): Promise<Maybe<StatuteModel>>;
}
