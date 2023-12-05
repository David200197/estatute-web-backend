import { UpdateAboutUsHandlerModel } from './update-about-us-handler.model';
import { UpdateAboutUsHandler } from './update-about-us.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [UPDATE_ABOUT_US_HANDLER_TOKEN, UpdateAboutUsHandlerProvider] =
  createClassProvider<UpdateAboutUsHandlerModel>(UpdateAboutUsHandler);
