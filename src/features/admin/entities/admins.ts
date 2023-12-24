import { Entities } from '@src/common/abstracts/entities.abstracts';
import { AdminModel, AdminProps } from '../models/admin.model';
import { AdminsModel } from '../models/admins.model';
import { Admin } from './admin';
import { SelfPartial } from '@src/common/interfaces/self-partial';

export class Admins extends Entities<AdminModel> implements AdminsModel {
  private constructor(public readonly value: AdminModel[]) {
    super(value);
  }

  static create(value: SelfPartial<AdminProps, 'uuid'>[]): Admins {
    if (!Array.isArray(value)) throw new TypeError('Admins is not a array');
    return new Admins(value.map((data) => Admin.create(data)));
  }
}
