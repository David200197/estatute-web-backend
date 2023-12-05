import { AdminModel } from '../models/admin.model';
import { AdminsModel } from '../models/admins.model';

export class Admins implements AdminsModel {
  constructor(public readonly value: AdminModel[]) {}
}
