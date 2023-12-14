import { Entity } from '@src/common/abstracts/entity.abstract';
import { AdminModel, AdminProperties } from '../models/admin.model';

export class Admin extends Entity implements AdminModel {
  readonly username: string;
  readonly password: string;
  readonly refreshToken?: string;

  constructor(options: AdminProperties) {
    super();
    Object.assign(this, options);
  }
}
