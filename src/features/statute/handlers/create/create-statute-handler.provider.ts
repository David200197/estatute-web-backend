import { CreateStatuteHandlerModel } from './create-statute-handler.model';
import { CreateStatuteHandler } from './create-statute.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [CREATE_STATUTE_HANDLER_TOKEN, CreateStatuteHandlerProvider] =
  createClassProvider<CreateStatuteHandlerModel>(CreateStatuteHandler);
