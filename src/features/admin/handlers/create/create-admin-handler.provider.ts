import { CreateAdminHandlerModel } from './create-admin-handler.model';
import { CreateAdminHandler } from './create-admin.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [CREATE_ADMIN_HANDLER_TOKEN, CreateAdminHandlerProvider] =
  createClassProvider<CreateAdminHandlerModel>(CreateAdminHandler);
