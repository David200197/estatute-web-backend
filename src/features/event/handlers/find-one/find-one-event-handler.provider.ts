import { FindOneEventHandlerModel } from './find-one-event-handler.model';
import { FindOneEventHandler } from './find-one-event.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [FIND_ONE_EVENT_HANDLER_TOKEN, FindOneEventHandlerProvider] =
  createProvider<FindOneEventHandlerModel>(FindOneEventHandler);
