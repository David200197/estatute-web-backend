import { EntityCollectionModel } from '@src/common/abstracts/entity-collection.abstracts';
import { AdminModel, AdminProperties } from './admin.model';

export interface AdminsModel extends EntityCollectionModel<AdminModel> {
  readonly value: AdminModel[];
  getJson(): Pick<AdminProperties, 'username'>[];
}
