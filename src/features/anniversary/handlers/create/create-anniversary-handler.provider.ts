import { CreateAnniversaryHandlerModel } from './create-anniversary-handler.model';
import { CreateAnniversaryHandler } from './create-anniversary.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [
  CREATE_ANNIVERSARY_HANDLER_TOKEN,
  CreateAnniversaryHandlerProvider,
] = createClassProvider<CreateAnniversaryHandlerModel>(
  CreateAnniversaryHandler,
);
