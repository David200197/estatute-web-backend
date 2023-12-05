import { CreateUserHandlerModel } from './create-user-handler.model';
import { CreateUserHandler } from './create-user.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [CREATE_USER_HANDLER_TOKEN, CreateUserHandlerProvider] =
  createClassProvider<CreateUserHandlerModel>(CreateUserHandler);
