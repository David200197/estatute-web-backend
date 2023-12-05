import { FindAllUserQuery } from './find-all-user.query';

import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { UsersModel } from '../../models/users.model';

export interface FindAllUserHandlerModel {
  execute(command: FindAllUserQuery): Promise<ResponseWithPaginate<UsersModel>>;
}
