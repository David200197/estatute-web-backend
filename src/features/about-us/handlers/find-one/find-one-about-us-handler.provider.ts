import { FindOneAboutUsHandlerModel } from './find-one-about-us-handler.model';
import { FindOneAboutUsHandler } from './find-one-about-us.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [FIND_ONE_ABOUT_US_HANDLER_TOKEN, FindOneAboutUsHandlerProvider] =
  createClassProvider<FindOneAboutUsHandlerModel>(FindOneAboutUsHandler);
