import { FindOneAnniversaryHandlerModel } from './find-one-anniversary-handler.model';
import { FindOneAnniversaryHandler } from './find-one-anniversary.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [
  FIND_ONE_ANNIVERSARY_HANDLER_TOKEN,
  FindOneAnniversaryHandlerProvider,
] = createProvider<FindOneAnniversaryHandlerModel>(
  FindOneAnniversaryHandler,
);
