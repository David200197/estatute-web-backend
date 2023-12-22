import { Entity } from '@src/common/abstracts/entity.abstract';
import { AdminModel, AdminProperties } from '../models/admin.model';
import { PasswordValueObject } from './value-object/password.value-object';
import { UsernameValueObject } from './value-object/username.value-object';
import { RefreshTokenValueObject } from './value-object/refresh-token.value-object';

export class Admin extends Entity implements AdminModel {
  public readonly password: string;
  public readonly username: string;
  public readonly refreshToken?: string;

  constructor(options: AdminProperties) {
    super();
    this.password = new PasswordValueObject(options.password).value;
    this.username = new UsernameValueObject(options.username).value;
    this.refreshToken = new RefreshTokenValueObject(options.refreshToken).value;
  }
}
