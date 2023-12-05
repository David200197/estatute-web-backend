import { CreateSocialNetworksCommand } from './create-social-networks.command';
import { SocialNetworksModel } from '../../models/social-networks.model';
export interface CreateSocialNetworksHandlerModel {
  execute(command: CreateSocialNetworksCommand): Promise<SocialNetworksModel>;
}
