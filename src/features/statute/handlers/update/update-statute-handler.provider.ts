import { UpdateStatuteHandlerModel } from './update-statute-handler.model';
import { UpdateStatuteHandler } from './update-statute.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [UPDATE_STATUTE_HANDLER_TOKEN, UpdateStatuteHandlerProvider] =
  createProvider<UpdateStatuteHandlerModel>(UpdateStatuteHandler);
