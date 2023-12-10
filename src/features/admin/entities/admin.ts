import { AdminModel, AdminProperties } from '../models/admin.model';

export class Admin implements AdminModel {
  readonly username: string;
  readonly password: string;
  readonly refreshToken: string;

  constructor(options: AdminProperties) {
    Object.assign(this, options);
  }
}
