import { UpdateAboutUsHandlerModel } from './update-about-us-handler.model';
import { UpdateAboutUsHandler } from './update-about-us.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [UPDATE_ABOUT_US_HANDLER_TOKEN, UpdateAboutUsHandlerProvider] =
  createProvider<UpdateAboutUsHandlerModel>(UpdateAboutUsHandler);
