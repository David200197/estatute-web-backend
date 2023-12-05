import { FindAllEventHandlerModel } from './find-all-event-handler.model';
import { FindAllEventHandler } from './find-all-event.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [FIND_ALL_EVENT_HANDLER_TOKEN, FindAllEventHandlerProvider] =
  createClassProvider<FindAllEventHandlerModel>(FindAllEventHandler);
