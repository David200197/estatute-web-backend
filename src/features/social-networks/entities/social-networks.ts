import { Entity } from '@src/common/abstracts/entity.abstract';
import {
  SocialNetworksModel,
  SocialNetworksProperties,
} from '../models/social-networks.model';

export class SocialNetworks
  extends Entity<SocialNetworksModel>
  implements SocialNetworksModel
{
  constructor(options: SocialNetworksProperties) {
    super(options);
    Object.assign(this, options);
  }
}
