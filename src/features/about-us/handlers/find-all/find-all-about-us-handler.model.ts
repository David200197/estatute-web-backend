import { FindAllAboutUsQuery } from './find-all-about-us.query';

import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { AboutUssModel } from '../../models/about-uss.model';
import { IQueryHandler } from '@nestjs/cqrs';

export interface FindAllAboutUsHandlerModel
  extends IQueryHandler<FindAllAboutUsQuery> {
  execute(
    command: FindAllAboutUsQuery,
  ): Promise<ResponseWithPaginate<AboutUssModel>>;
}
