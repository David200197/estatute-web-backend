import { FindOneAboutUsHandlerModel } from './find-one-about-us-handler.model';
import { FindOneAboutUsHandler } from './find-one-about-us.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [FIND_ONE_ABOUT_US_HANDLER_TOKEN, FindOneAboutUsHandlerProvider] =
  createProvider<FindOneAboutUsHandlerModel>(FindOneAboutUsHandler);
