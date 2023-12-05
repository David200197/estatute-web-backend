import { FindAllAboutUsHandlerModel } from './find-all-about-us-handler.model';
import { FindAllAboutUsHandler } from './find-all-about-us.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [FIND_ALL_ABOUT_US_HANDLER_TOKEN, FindAllAboutUsHandlerProvider] =
  createClassProvider<FindAllAboutUsHandlerModel>(FindAllAboutUsHandler);
