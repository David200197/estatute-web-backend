import { FindAllAnniversaryHandlerModel } from './find-all-anniversary-handler.model';
import { FindAllAnniversaryHandler } from './find-all-anniversary.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [
  FIND_ALL_ANNIVERSARY_HANDLER_TOKEN,
  FindAllAnniversaryHandlerProvider,
] = createProvider<FindAllAnniversaryHandlerModel>(FindAllAnniversaryHandler);
