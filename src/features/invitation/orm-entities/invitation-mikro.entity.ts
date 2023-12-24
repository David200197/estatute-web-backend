import { Entity, PrimaryKey } from '@mikro-orm/core';
import { InvitationProps } from '../models/invitation.model';

@Entity({
  tableName: 'Invitation',
})
export class InvitationMikroEntity implements InvitationProps {
  @PrimaryKey()
  uuid: string;
}
