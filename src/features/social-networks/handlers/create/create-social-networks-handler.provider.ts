import { CreateSocialNetworksHandlerModel } from './create-social-networks-handler.model';
import { CreateSocialNetworksHandler } from './create-social-networks.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [
  CREATE_SOCIAL_NETWORKS_HANDLER_TOKEN,
  CreateSocialNetworksHandlerProvider,
] = createClassProvider<CreateSocialNetworksHandlerModel>(
  CreateSocialNetworksHandler,
);
