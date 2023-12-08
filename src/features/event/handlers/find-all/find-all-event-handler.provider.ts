import { FindAllEventHandlerModel } from './find-all-event-handler.model';
import { FindAllEventHandler } from './find-all-event.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [FIND_ALL_EVENT_HANDLER_TOKEN, FindAllEventHandlerProvider] =
  createProvider<FindAllEventHandlerModel>(FindAllEventHandler);
