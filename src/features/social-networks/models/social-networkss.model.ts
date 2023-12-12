import { EntityCollectionModel } from '@src/common/abstracts/entity-collection.abstracts';
import { SocialNetworksModel } from './social-networks.model';

export interface SocialNetworkssModel
  extends EntityCollectionModel<SocialNetworksModel> {
  readonly value: SocialNetworksModel[];
}
