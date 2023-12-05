import { FindAllAdminHandlerModel } from './find-all-admin-handler.model';
import { FindAllAdminHandler } from './find-all-admin.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [FIND_ALL_ADMIN_HANDLER_TOKEN, FindAllAdminHandlerProvider] =
  createClassProvider<FindAllAdminHandlerModel>(FindAllAdminHandler);
