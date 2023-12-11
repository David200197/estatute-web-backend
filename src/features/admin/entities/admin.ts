import { Entity } from '@src/common/abstracts/entity.abstract';
import { AdminModel, AdminProperties } from '../models/admin.model';

export class Admin extends Entity<AdminModel> implements AdminModel {
  readonly username: string;
  readonly password: string;
  readonly refreshToken: string;

  constructor(options: AdminProperties) {
    super(options);
    Object.assign(this, options);
  }
}
