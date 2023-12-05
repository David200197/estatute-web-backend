import { FindOneAdminHandlerModel } from './find-one-admin-handler.model';
import { FindOneAdminHandler } from './find-one-admin.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [FIND_ONE_ADMIN_HANDLER_TOKEN, FindOneAdminHandlerProvider] =
  createClassProvider<FindOneAdminHandlerModel>(FindOneAdminHandler);
