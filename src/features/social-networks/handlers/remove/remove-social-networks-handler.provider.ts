import { RemoveSocialNetworksHandlerModel } from './remove-social-networks-handler.model';
import { RemoveSocialNetworksHandler } from './remove-social-networks.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [
  REMOVE_SOCIAL_NETWORKS_HANDLER_TOKEN,
  RemoveSocialNetworksHandlerProvider,
] = createClassProvider<RemoveSocialNetworksHandlerModel>(
  RemoveSocialNetworksHandler,
);
