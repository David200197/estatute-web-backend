import { EntityCollection } from '@src/common/abstracts/entity-collection.abstracts';
import { SocialNetworkModel } from '../models/social-network.model';
import { SocialNetworksModel } from '../models/social-networks.model';
import { SocialNetwork } from './social-network';

export class SocialNetworks
  extends EntityCollection<SocialNetworkModel>
  implements SocialNetworksModel
{
  constructor(public readonly value: SocialNetworkModel[]) {
    super(value);
  }

  static instance(value: SocialNetworkModel[]) {
    if (!Array.isArray(value))
      throw new TypeError('SocialNetworks is not a array');
    return new SocialNetworks(value.map((data) => new SocialNetwork(data)));
  }
}
