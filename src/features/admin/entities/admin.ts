import { Entity } from '@src/common/abstracts/entity.abstract';
import { AdminModel, AdminProperties } from '../models/admin.model';
import { PasswordObjectValue } from './object-value/password.object-value';
import { UsernameObjectValue } from './object-value/username.object-value';
import { RefreshTokenObjectValue } from './object-value/refresh-token.object-value';

export class Admin extends Entity implements AdminModel {
  public readonly password: string;
  public readonly username: string;
  public readonly refreshToken?: string;

  constructor(options: AdminProperties) {
    super();
    this.password = new PasswordObjectValue(options.password).value;
    this.username = new UsernameObjectValue(options.username).value;
    this.refreshToken = new RefreshTokenObjectValue(options.refreshToken).value;
  }
}
