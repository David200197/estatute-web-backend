import { CreateSocialNetworkHandlerModel } from './create-social-network-handler.model';
import { CreateSocialNetworksHandler } from './create-social-network.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [
  CREATE_SOCIAL_NETWORK_HANDLER_TOKEN,
  CreateSocialNetworkHandlerProvider,
] = createProvider<CreateSocialNetworkHandlerModel>(
  CreateSocialNetworksHandler,
);
