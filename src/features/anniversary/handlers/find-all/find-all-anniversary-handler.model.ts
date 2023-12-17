import { FindAllAnniversaryQuery } from './find-all-anniversary.query';

import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { AnniversariesModel } from '../../models/anniversaries.model';
import { IQueryHandler } from '@nestjs/cqrs';

export interface FindAllAnniversaryHandlerModel
  extends IQueryHandler<FindAllAnniversaryQuery> {
  execute(
    command: FindAllAnniversaryQuery,
  ): Promise<ResponseWithPaginate<AnniversariesModel>>;
}
