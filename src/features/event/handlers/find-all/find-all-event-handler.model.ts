import { FindAllEventQuery } from './find-all-event.query';

import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { EventsModel } from '../../models/events.model';
import { IQueryHandler } from '@nestjs/cqrs';

export interface FindAllEventHandlerModel
  extends IQueryHandler<FindAllEventQuery> {
  execute(
    command: FindAllEventQuery,
  ): Promise<ResponseWithPaginate<EventsModel>>;
}
