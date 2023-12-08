import { FindAllAdminHandlerModel } from './find-all-admin-handler.model';
import { FindAllAdminHandler } from './find-all-admin.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [FIND_ALL_ADMIN_HANDLER_TOKEN, FindAllAdminHandlerProvider] =
  createProvider<FindAllAdminHandlerModel>(FindAllAdminHandler);
