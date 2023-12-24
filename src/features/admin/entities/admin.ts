import { Entity } from '@src/common/abstracts/entity.abstract';
import { AdminModel, AdminProps } from '../models/admin.model';
import { Password } from './value-object/password.value-object';
import { Username } from './value-object/username.value-object';
import { RefreshToken } from './value-object/refresh-token.value-object';
import { PropsToValueObjects } from '@src/common/interfaces/props-to-value-objects';
import { SelfPartial } from '@src/common/interfaces/self-partial';
import { Uuid } from '@src/common/value-object/uuid.value-object';

export class Admin extends Entity<AdminProps> implements AdminModel {
  private constructor(options: PropsToValueObjects<AdminProps>) {
    super(options);
  }

  public static create(options: SelfPartial<AdminProps, 'uuid'>): Admin {
    const uuid = Uuid.create(options.uuid);
    const username = Username.create(options.username);
    const password = Password.create(options.password);
    const refreshToken = RefreshToken.create(options.refreshToken);
    return new Admin({ uuid, username, password, refreshToken });
  }
}
