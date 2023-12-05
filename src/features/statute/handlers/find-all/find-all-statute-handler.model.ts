import { FindAllStatuteQuery } from './find-all-statute.query';

import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { StatutesModel } from '../../models/statutes.model';

export interface FindAllStatuteHandlerModel {
  execute(
    command: FindAllStatuteQuery,
  ): Promise<ResponseWithPaginate<StatutesModel>>;
}
