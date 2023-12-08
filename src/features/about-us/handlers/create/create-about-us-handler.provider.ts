import { CreateAboutUsHandlerModel } from './create-about-us-handler.model';
import { CreateAboutUsHandler } from './create-about-us.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [CREATE_ABOUT_US_HANDLER_TOKEN, CreateAboutUsHandlerProvider] =
  createProvider<CreateAboutUsHandlerModel>(CreateAboutUsHandler);
