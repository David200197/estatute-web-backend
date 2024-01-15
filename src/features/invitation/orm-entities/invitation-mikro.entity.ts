import {
  ArrayType,
  Entity,
  PrimaryKey,
  Property,
  StringType,
} from '@mikro-orm/core';
import { InvitationProps, TypeEventEnum } from '../models/invitation.model';

@Entity({
  tableName: 'Invitation',
})
export class InvitationMikroEntity implements InvitationProps {
  @PrimaryKey()
  uuid: string;
  @Property()
  name: string;
  @Property({ type: ArrayType })
  sponsors: string[];
  @Property()
  location: string;
  @Property({ type: StringType })
  type: TypeEventEnum;
}
