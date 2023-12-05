import { FindAllInvitationQuery } from './find-all-invitation.query';

import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { InvitationsModel } from '../../models/invitations.model';

export interface FindAllInvitationHandlerModel {
  execute(
    command: FindAllInvitationQuery,
  ): Promise<ResponseWithPaginate<InvitationsModel>>;
}
