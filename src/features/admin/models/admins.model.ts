import { EntityCollectionModel } from '@src/common/abstracts/entity-collection.abstracts';
import { AdminModel } from './admin.model';

export interface AdminsModel extends EntityCollectionModel<AdminModel> {
  readonly value: AdminModel[];
}
