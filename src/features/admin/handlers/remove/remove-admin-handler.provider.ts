import { RemoveAdminHandlerModel } from './remove-admin-handler.model';
import { RemoveAdminHandler } from './remove-admin.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [REMOVE_ADMIN_HANDLER_TOKEN, RemoveAdminHandlerProvider] =
  createProvider<RemoveAdminHandlerModel>(RemoveAdminHandler);
