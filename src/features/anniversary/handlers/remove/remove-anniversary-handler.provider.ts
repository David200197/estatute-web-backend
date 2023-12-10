import { RemoveAnniversaryHandlerModel } from './remove-anniversary-handler.model';
import { RemoveAnniversaryHandler } from './remove-anniversary.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [
  REMOVE_ANNIVERSARY_HANDLER_TOKEN,
  RemoveAnniversaryHandlerProvider,
] = createProvider<RemoveAnniversaryHandlerModel>(RemoveAnniversaryHandler);
