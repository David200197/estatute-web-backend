import { FindOneAnniversaryHandlerModel } from './find-one-anniversary-handler.model';
import { FindOneAnniversaryHandler } from './find-one-anniversary.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [
  FIND_ONE_ANNIVERSARY_HANDLER_TOKEN,
  FindOneAnniversaryHandlerProvider,
] = createClassProvider<FindOneAnniversaryHandlerModel>(
  FindOneAnniversaryHandler,
);
