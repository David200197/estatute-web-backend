import { FindAllStatuteQuery } from './find-all-statute.query';

import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { StatutesModel } from '../../models/statutes.model';
import { IQueryHandler } from '@nestjs/cqrs';

export interface FindAllStatuteHandlerModel
  extends IQueryHandler<FindAllStatuteQuery> {
  execute(
    command: FindAllStatuteQuery,
  ): Promise<ResponseWithPaginate<StatutesModel>>;
}
