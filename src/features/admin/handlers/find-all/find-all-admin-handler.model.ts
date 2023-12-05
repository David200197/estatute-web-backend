import { FindAllAdminQuery } from './find-all-admin.query';

import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { AdminsModel } from '../../models/admins.model';

export interface FindAllAdminHandlerModel {
  execute(
    command: FindAllAdminQuery,
  ): Promise<ResponseWithPaginate<AdminsModel>>;
}
