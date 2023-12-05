import { FindAllAboutUsQuery } from './find-all-about-us.query';

import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { AboutUssModel } from '../../models/about-uss.model';

export interface FindAllAboutUsHandlerModel {
  execute(
    command: FindAllAboutUsQuery,
  ): Promise<ResponseWithPaginate<AboutUssModel>>;
}
