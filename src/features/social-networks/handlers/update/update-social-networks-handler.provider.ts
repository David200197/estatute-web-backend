import { UpdateSocialNetworksHandlerModel } from './update-social-networks-handler.model';
import { UpdateSocialNetworksHandler } from './update-social-networks.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [
  UPDATE_SOCIAL_NETWORKS_HANDLER_TOKEN,
  UpdateSocialNetworksHandlerProvider,
] = createProvider<UpdateSocialNetworksHandlerModel>(
  UpdateSocialNetworksHandler,
);
