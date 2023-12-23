import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { SocialNetworkProps } from '../../models/social-network.model';

export class FindOneSocialNetworksQuery {
  constructor(public readonly filter: DeepPartial<SocialNetworkProps>) {}
}
