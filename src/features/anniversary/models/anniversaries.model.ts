import { EntityCollectionModel } from '@src/common/abstracts/entity-collection.abstracts';
import { AnniversaryModel } from './anniversary.model';

export interface AnniversariesModel
  extends EntityCollectionModel<AnniversaryModel> {
  readonly value: AnniversaryModel[];
}
