import { FindAllAnniversaryHandlerModel } from './find-all-anniversary-handler.model';
import { FindAllAnniversaryHandler } from './find-all-anniversary.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [
  FIND_ALL_ANNIVERSARY_HANDLER_TOKEN,
  FindAllAnniversaryHandlerProvider,
] = createClassProvider<FindAllAnniversaryHandlerModel>(
  FindAllAnniversaryHandler,
);
