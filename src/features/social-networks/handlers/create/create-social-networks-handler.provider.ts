import { CreateSocialNetworksHandlerModel } from './create-social-networks-handler.model';
import { CreateSocialNetworksHandler } from './create-social-networks.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [
  CREATE_SOCIAL_NETWORKS_HANDLER_TOKEN,
  CreateSocialNetworksHandlerProvider,
] = createProvider<CreateSocialNetworksHandlerModel>(
  CreateSocialNetworksHandler,
);
