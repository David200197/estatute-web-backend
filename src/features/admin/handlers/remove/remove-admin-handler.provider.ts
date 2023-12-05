import { RemoveAdminHandlerModel } from './remove-admin-handler.model';
import { RemoveAdminHandler } from './remove-admin.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [REMOVE_ADMIN_HANDLER_TOKEN, RemoveAdminHandlerProvider] =
  createClassProvider<RemoveAdminHandlerModel>(RemoveAdminHandler);
