import { FindAllEventQuery } from './find-all-event.query';

import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { EventsModel } from '../../models/events.model';

export interface FindAllEventHandlerModel {
  execute(
    command: FindAllEventQuery,
  ): Promise<ResponseWithPaginate<EventsModel>>;
}
