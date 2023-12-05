import { CreateAboutUsHandlerModel } from './create-about-us-handler.model';
import { CreateAboutUsHandler } from './create-about-us.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [CREATE_ABOUT_US_HANDLER_TOKEN, CreateAboutUsHandlerProvider] =
  createClassProvider<CreateAboutUsHandlerModel>(CreateAboutUsHandler);
