import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { SocialNetworksModel } from '../../models/social-networks.model';

export class RemoveSocialNetworksCommand {
  constructor(public readonly filter: DeepPartial<SocialNetworksModel>) {}
}
