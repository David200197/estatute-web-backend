import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { FindOneInvitationQuery } from './find-one-invitation.query';
import { InvitationRepositoryModel } from '../../models/invitation-repository.model';
import { FindOneInvitationHandlerModel } from './find-one-invitation-handler.model';
import { Inject } from '@nestjs/common';
import { INVITATION_REPOSITORY_TOKEN } from '../../providers/invitation-repository.provider';
import { InvitationModel } from '../../models/invitation.model';
import { Maybe } from '@src/common/lib/maybe.lib';

@QueryHandler(FindOneInvitationQuery)
export class FindOneInvitationHandler
  implements
    FindOneInvitationHandlerModel,
    IQueryHandler<FindOneInvitationQuery>
{
  constructor(
    @Inject(INVITATION_REPOSITORY_TOKEN)
    private invitationRepository: InvitationRepositoryModel,
  ) {}

  async execute({
    filter,
  }: FindOneInvitationQuery): Promise<Maybe<InvitationModel>> {
    const invitation = await this.invitationRepository.findOne(filter);
    return Maybe.fromValue(invitation);
  }
}
