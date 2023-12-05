import { UpdateSocialNetworksCommand } from './update-social-networks.command';
import { SocialNetworksModel } from '../../models/social-networks.model';
export interface UpdateSocialNetworksHandlerModel {
  execute(command: UpdateSocialNetworksCommand): Promise<SocialNetworksModel>;
}
