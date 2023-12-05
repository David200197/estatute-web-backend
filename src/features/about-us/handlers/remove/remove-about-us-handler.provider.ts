import { RemoveAboutUsHandlerModel } from './remove-about-us-handler.model';
import { RemoveAboutUsHandler } from './remove-about-us.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [REMOVE_ABOUT_US_HANDLER_TOKEN, RemoveAboutUsHandlerProvider] =
  createClassProvider<RemoveAboutUsHandlerModel>(RemoveAboutUsHandler);
