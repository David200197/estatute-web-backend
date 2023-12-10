import { AdminModel, AdminProperties } from '../models/admin.model';

export class Admin implements AdminModel {
  readonly username: string;
  readonly password: string;

  constructor(options: AdminProperties) {
    Object.assign(this, options);
  }
}
