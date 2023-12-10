import { FindAllInvitationQuery } from './find-all-invitation.query';

import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { InvitationsModel } from '../../models/invitations.model';
import { IQueryHandler } from '@nestjs/cqrs';

export interface FindAllInvitationHandlerModel
  extends IQueryHandler<FindAllInvitationQuery> {
  execute(
    command: FindAllInvitationQuery,
  ): Promise<ResponseWithPaginate<InvitationsModel>>;
}
