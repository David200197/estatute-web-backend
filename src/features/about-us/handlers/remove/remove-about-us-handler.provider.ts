import { RemoveAboutUsHandlerModel } from './remove-about-us-handler.model';
import { RemoveAboutUsHandler } from './remove-about-us.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [REMOVE_ABOUT_US_HANDLER_TOKEN, RemoveAboutUsHandlerProvider] =
  createProvider<RemoveAboutUsHandlerModel>(RemoveAboutUsHandler);
