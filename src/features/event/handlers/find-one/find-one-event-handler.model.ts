import { FindOneEventQuery } from './find-one-event.query';

import { EventModel } from '../../models/event.model';
import { Maybe } from '@src/common/lib/maybe.lib';
export interface FindOneEventHandlerModel {
  execute(command: FindOneEventQuery): Promise<Maybe<EventModel>>;
}
