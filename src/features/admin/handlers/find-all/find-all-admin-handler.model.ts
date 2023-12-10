import { FindAllAdminQuery } from './find-all-admin.query';

import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { AdminsModel } from '../../models/admins.model';
import { IQueryHandler } from '@nestjs/cqrs';

export interface FindAllAdminHandlerModel
  extends IQueryHandler<FindAllAdminQuery> {
  execute(
    command: FindAllAdminQuery,
  ): Promise<ResponseWithPaginate<AdminsModel>>;
}
