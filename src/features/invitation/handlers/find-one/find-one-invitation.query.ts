import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { InvitationModel } from '../../models/invitation.model';

export class FindOneInvitationQuery {
  constructor(public readonly filter: DeepPartial<InvitationModel>) {}
}
