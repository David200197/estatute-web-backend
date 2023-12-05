import { UpdateStatuteHandlerModel } from './update-statute-handler.model';
import { UpdateStatuteHandler } from './update-statute.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [UPDATE_STATUTE_HANDLER_TOKEN, UpdateStatuteHandlerProvider] =
  createClassProvider<UpdateStatuteHandlerModel>(UpdateStatuteHandler);
