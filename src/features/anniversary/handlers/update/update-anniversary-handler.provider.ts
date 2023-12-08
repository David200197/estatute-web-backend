import { UpdateAnniversaryHandlerModel } from './update-anniversary-handler.model';
import { UpdateAnniversaryHandler } from './update-anniversary.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [
  UPDATE_ANNIVERSARY_HANDLER_TOKEN,
  UpdateAnniversaryHandlerProvider,
] = createProvider<UpdateAnniversaryHandlerModel>(
  UpdateAnniversaryHandler,
);
