import { Entity, Property, PrimaryKey } from '@mikro-orm/core';
import { AdminProps } from '../models/admin.model';

@Entity({
  tableName: 'Admin',
})
export class AdminMikroEntity implements AdminProps {
  @PrimaryKey()
  uuid: string;
  @Property({ unique: true })
  username: string;
  @Property()
  password: string;
  @Property({ nullable: true })
  refreshToken?: string;
}
