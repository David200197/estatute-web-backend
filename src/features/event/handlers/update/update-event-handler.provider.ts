import { UpdateEventHandlerModel } from './update-event-handler.model';
import { UpdateEventHandler } from './update-event.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [UPDATE_EVENT_HANDLER_TOKEN, UpdateEventHandlerProvider] =
  createClassProvider<UpdateEventHandlerModel>(UpdateEventHandler);
