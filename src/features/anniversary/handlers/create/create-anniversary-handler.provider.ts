import { CreateAnniversaryHandlerModel } from './create-anniversary-handler.model';
import { CreateAnniversaryHandler } from './create-anniversary.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [
  CREATE_ANNIVERSARY_HANDLER_TOKEN,
  CreateAnniversaryHandlerProvider,
] = createProvider<CreateAnniversaryHandlerModel>(
  CreateAnniversaryHandler,
);
