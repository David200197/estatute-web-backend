import { FindAllAnniversaryQuery } from './find-all-anniversary.query';

import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { AnniversarysModel } from '../../models/anniversarys.model';

export interface FindAllAnniversaryHandlerModel {
  execute(
    command: FindAllAnniversaryQuery,
  ): Promise<ResponseWithPaginate<AnniversarysModel>>;
}
