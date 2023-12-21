import { EntityCollectionModel } from '@src/common/abstracts/entity-collection.abstracts';
import { SocialNetworkModel } from './social-network.model';

export interface SocialNetworksModel
  extends EntityCollectionModel<SocialNetworkModel> {
  readonly value: SocialNetworkModel[];
}
