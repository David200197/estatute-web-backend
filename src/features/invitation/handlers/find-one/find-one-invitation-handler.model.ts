import { FindOneInvitationQuery } from './find-one-invitation.query';

import { InvitationModel } from '../../models/invitation.model';
import { Maybe } from '@src/common/lib/maybe.lib';
export interface FindOneInvitationHandlerModel {
  execute(command: FindOneInvitationQuery): Promise<Maybe<InvitationModel>>;
}
