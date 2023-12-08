import { UpdateAdminHandlerModel } from './update-admin-handler.model';
import { UpdateAdminHandler } from './update-admin.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [UPDATE_ADMIN_HANDLER_TOKEN, UpdateAdminHandlerProvider] =
  createProvider<UpdateAdminHandlerModel>(UpdateAdminHandler);
