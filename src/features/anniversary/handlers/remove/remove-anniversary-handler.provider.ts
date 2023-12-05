import { RemoveAnniversaryHandlerModel } from './remove-anniversary-handler.model';
import { RemoveAnniversaryHandler } from './remove-anniversary.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [
  REMOVE_ANNIVERSARY_HANDLER_TOKEN,
  RemoveAnniversaryHandlerProvider,
] = createClassProvider<RemoveAnniversaryHandlerModel>(
  RemoveAnniversaryHandler,
);
