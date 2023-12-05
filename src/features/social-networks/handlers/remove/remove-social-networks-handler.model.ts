import { RemoveSocialNetworksCommand } from './remove-social-networks.command';
import { SocialNetworksModel } from '../../models/social-networks.model';
export interface RemoveSocialNetworksHandlerModel {
  execute(command: RemoveSocialNetworksCommand): Promise<SocialNetworksModel>;
}
