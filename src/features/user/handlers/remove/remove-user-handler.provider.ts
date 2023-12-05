import { RemoveUserHandlerModel } from './remove-user-handler.model';
import { RemoveUserHandler } from './remove-user.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [REMOVE_USER_HANDLER_TOKEN, RemoveUserHandlerProvider] =
  createClassProvider<RemoveUserHandlerModel>(RemoveUserHandler);
