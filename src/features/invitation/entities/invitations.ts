import { Entities } from '@src/common/abstracts/entities.abstracts';
import { InvitationModel, InvitationProps } from '../models/invitation.model';
import { InvitationsModel } from '../models/invitations.model';
import { Invitation } from './invitation';
import { SelfPartial } from '@src/common/interfaces/self-partial';

export class Invitations
  extends Entities<InvitationModel>
  implements InvitationsModel
{
  private constructor(public readonly value: InvitationModel[]) {
    super(value);
  }

  static create(value: SelfPartial<InvitationProps, 'uuid'>[]) {
    if (!Array.isArray(value))
      throw new TypeError('Invitations is not a array');
    return new Invitations(value.map((data) => Invitation.create(data)));
  }
}
