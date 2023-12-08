import { FindAllAboutUsHandlerModel } from './find-all-about-us-handler.model';
import { FindAllAboutUsHandler } from './find-all-about-us.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [FIND_ALL_ABOUT_US_HANDLER_TOKEN, FindAllAboutUsHandlerProvider] =
  createProvider<FindAllAboutUsHandlerModel>(FindAllAboutUsHandler);
