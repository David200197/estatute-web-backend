import { Entities } from '@src/common/abstracts/entities.abstracts';
import {
  SocialNetworkModel,
  SocialNetworkProps,
} from '../models/social-network.model';
import { SocialNetworksModel } from '../models/social-networks.model';
import { SocialNetwork } from './social-network';
import { SelfPartial } from '@src/common/interfaces/self-partial';

export class SocialNetworks
  extends Entities<SocialNetworkModel>
  implements SocialNetworksModel
{
  private constructor(public readonly value: SocialNetworkModel[]) {
    super(value);
  }

  static create(
    value: SelfPartial<SocialNetworkProps, 'uuid'>[],
  ): SocialNetworks {
    if (!Array.isArray(value))
      throw new TypeError('SocialNetworks is not a array');
    return new SocialNetworks(value.map((data) => SocialNetwork.create(data)));
  }
}
