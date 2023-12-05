import { UpdateAnniversaryHandlerModel } from './update-anniversary-handler.model';
import { UpdateAnniversaryHandler } from './update-anniversary.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [
  UPDATE_ANNIVERSARY_HANDLER_TOKEN,
  UpdateAnniversaryHandlerProvider,
] = createClassProvider<UpdateAnniversaryHandlerModel>(
  UpdateAnniversaryHandler,
);
