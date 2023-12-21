import { RemoveSocialNetworkHandlerModel } from './remove-social-network-handler.model';
import { RemoveSocialNetworksHandler } from './remove-social-network.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [
  REMOVE_SOCIAL_NETWORK_HANDLER_TOKEN,
  RemoveSocialNetworkHandlerProvider,
] = createProvider<RemoveSocialNetworkHandlerModel>(
  RemoveSocialNetworksHandler,
);
