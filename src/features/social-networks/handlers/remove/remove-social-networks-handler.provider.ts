import { RemoveSocialNetworksHandlerModel } from './remove-social-networks-handler.model';
import { RemoveSocialNetworksHandler } from './remove-social-networks.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [
  REMOVE_SOCIAL_NETWORKS_HANDLER_TOKEN,
  RemoveSocialNetworksHandlerProvider,
] = createProvider<RemoveSocialNetworksHandlerModel>(
  RemoveSocialNetworksHandler,
);
