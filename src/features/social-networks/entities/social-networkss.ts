import { EntityCollection } from '@src/common/abstracts/entity-collection.abstracts';
import { SocialNetworksModel } from '../models/social-networks.model';
import { SocialNetworkssModel } from '../models/social-networkss.model';

export class SocialNetworkss
  extends EntityCollection<SocialNetworksModel>
  implements SocialNetworkssModel
{
  constructor(public readonly value: SocialNetworksModel[]) {
    super(value);
  }
}
