import { FindOneAdminHandlerModel } from './find-one-admin-handler.model';
import { FindOneAdminHandler } from './find-one-admin.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [FIND_ONE_ADMIN_HANDLER_TOKEN, FindOneAdminHandlerProvider] =
  createProvider<FindOneAdminHandlerModel>(FindOneAdminHandler);
