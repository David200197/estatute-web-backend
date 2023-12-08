import { CreateStatuteHandlerModel } from './create-statute-handler.model';
import { CreateStatuteHandler } from './create-statute.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [CREATE_STATUTE_HANDLER_TOKEN, CreateStatuteHandlerProvider] =
  createProvider<CreateStatuteHandlerModel>(CreateStatuteHandler);
