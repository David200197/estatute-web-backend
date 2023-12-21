import { EntityCollection } from '@src/common/abstracts/entity-collection.abstracts';
import { AdminModel } from '../models/admin.model';
import { AdminsModel } from '../models/admins.model';
import { Admin } from './admin';

export class Admins
  extends EntityCollection<AdminModel>
  implements AdminsModel
{
  private constructor(public readonly value: AdminModel[]) {
    super(value);
  }

  static instance(value: AdminModel[]) {
    if (!Array.isArray(value)) throw new TypeError('Admins is not a array');
    return new Admins(value.map((data) => new Admin(data)));
  }
}
