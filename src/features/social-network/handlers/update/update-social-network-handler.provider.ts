import { UpdateSocialNetworkHandlerModel } from './update-social-network-handler.model';
import { UpdateSocialNetworkHandler } from './update-social-network.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [
  UPDATE_SOCIAL_NETWORK_HANDLER_TOKEN,
  UpdateSocialNetworkHandlerProvider,
] = createProvider<UpdateSocialNetworkHandlerModel>(UpdateSocialNetworkHandler);
