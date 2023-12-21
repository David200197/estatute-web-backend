import { Entity } from '@src/common/abstracts/entity.abstract';
import { AdminModel, AdminProperties } from '../models/admin.model';
import { PasswordObjectValue } from './object-value/password.object-value';
import { UsernameObjectValue } from './object-value/username.object-value';
import { RefreshTokenObjectValue } from './object-value/refresh-token.object-value';

export class Admin extends Entity implements AdminModel {
  private _password: PasswordObjectValue;
  private _username: UsernameObjectValue;
  private _refreshToken: RefreshTokenObjectValue;

  constructor(options: AdminProperties) {
    super();
    this._password = new PasswordObjectValue(options.password);
    this._username = new UsernameObjectValue(options.username);
    this._refreshToken = new RefreshTokenObjectValue(options.refreshToken);
  }

  get password() {
    return this._password.value;
  }

  set password(value: string) {
    this._password = new PasswordObjectValue(value);
  }

  get username() {
    return this._username.value;
  }

  set username(value: string) {
    this._username = new UsernameObjectValue(value);
  }

  get refreshToken() {
    return this._refreshToken.value;
  }

  set refreshToken(value: string) {
    this._refreshToken = new RefreshTokenObjectValue(value);
  }
}
