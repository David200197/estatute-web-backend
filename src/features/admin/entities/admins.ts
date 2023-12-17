import { EntityCollection } from '@src/common/abstracts/entity-collection.abstracts';
import { AdminModel, AdminProperties } from '../models/admin.model';
import { AdminsModel } from '../models/admins.model';

export class Admins
  extends EntityCollection<AdminModel>
  implements AdminsModel
{
  constructor(public readonly value: AdminModel[]) {
    super(value);
  }

  getJson(): Pick<AdminProperties, 'username'>[] {
    return this.value.map((data) => data.getJson());
  }
}
