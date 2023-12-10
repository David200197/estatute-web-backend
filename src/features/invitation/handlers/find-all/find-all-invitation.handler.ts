import { QueryHandler } from '@nestjs/cqrs';
import { FindAllInvitationQuery } from './find-all-invitation.query';
import { InvitationRepositoryModel } from '../../models/invitation-repository.model';
import { FindAllInvitationHandlerModel } from './find-all-invitation-handler.model';
import { Inject } from '@nestjs/common';
import { INVITATION_REPOSITORY_TOKEN } from '../../providers/invitation-repository.provider';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { InvitationsModel } from '../../models/invitations.model';

@QueryHandler(FindAllInvitationQuery)
export class FindAllInvitationHandler implements FindAllInvitationHandlerModel {
  constructor(
    @Inject(INVITATION_REPOSITORY_TOKEN)
    private invitationRepository: InvitationRepositoryModel,
  ) {}

  async execute({
    filter,
    options,
  }: FindAllInvitationQuery): Promise<ResponseWithPaginate<InvitationsModel>> {
    return await this.invitationRepository.findAll(filter, options);
  }
}
