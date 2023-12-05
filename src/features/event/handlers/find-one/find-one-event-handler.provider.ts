import { FindOneEventHandlerModel } from './find-one-event-handler.model';
import { FindOneEventHandler } from './find-one-event.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [FIND_ONE_EVENT_HANDLER_TOKEN, FindOneEventHandlerProvider] =
  createClassProvider<FindOneEventHandlerModel>(FindOneEventHandler);
