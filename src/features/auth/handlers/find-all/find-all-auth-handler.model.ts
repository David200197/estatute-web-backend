import { FindAllAuthQuery } from './find-all-auth.query';

import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { AuthsModel } from '../../models/auths.model';

export interface FindAllAuthHandlerModel {
  execute(command: FindAllAuthQuery): Promise<ResponseWithPaginate<AuthsModel>>;
}
