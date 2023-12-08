import { CreateAdminHandlerModel } from './create-admin-handler.model';
import { CreateAdminHandler } from './create-admin.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [CREATE_ADMIN_HANDLER_TOKEN, CreateAdminHandlerProvider] =
  createProvider<CreateAdminHandlerModel>(CreateAdminHandler);
