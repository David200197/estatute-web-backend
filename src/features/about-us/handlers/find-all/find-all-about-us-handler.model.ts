import { FindAllAboutUsQuery } from './find-all-about-us.query';

import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { AllAboutUsModel } from '../../models/all-about-us.model';
import { IQueryHandler } from '@nestjs/cqrs';

export interface FindAllAboutUsHandlerModel
  extends IQueryHandler<FindAllAboutUsQuery> {
  execute(
    command: FindAllAboutUsQuery,
  ): Promise<ResponseWithPaginate<AllAboutUsModel>>;
}
