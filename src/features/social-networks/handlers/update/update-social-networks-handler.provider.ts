import { UpdateSocialNetworksHandlerModel } from './update-social-networks-handler.model';
import { UpdateSocialNetworksHandler } from './update-social-networks.handler';
import { createClassProvider } from '@src/common/utils/create-class-provider';

export const [
  UPDATE_SOCIAL_NETWORKS_HANDLER_TOKEN,
  UpdateSocialNetworksHandlerProvider,
] = createClassProvider<UpdateSocialNetworksHandlerModel>(
  UpdateSocialNetworksHandler,
);
