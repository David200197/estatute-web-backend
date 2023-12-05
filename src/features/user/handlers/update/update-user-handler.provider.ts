import { UpdateUserHandlerModel } from './update-user-handler.model';
import { UpdateUserHandler } from './update-user.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [UPDATE_USER_HANDLER_TOKEN, UpdateUserHandlerProvider] =
  createClassProvider<UpdateUserHandlerModel>(UpdateUserHandler);
