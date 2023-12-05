import { UpdateAdminHandlerModel } from './update-admin-handler.model';
import { UpdateAdminHandler } from './update-admin.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [UPDATE_ADMIN_HANDLER_TOKEN, UpdateAdminHandlerProvider] =
  createClassProvider<UpdateAdminHandlerModel>(UpdateAdminHandler);
