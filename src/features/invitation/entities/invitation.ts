import { Entity } from '@src/common/abstracts/entity.abstract';
import {
  InvitationModel,
  InvitationProperties,
} from '../models/invitation.model';

export class Invitation
  extends Entity<InvitationModel>
  implements InvitationModel
{
  constructor(options: InvitationProperties) {
    super(options);
    Object.assign(this, options);
  }
}
