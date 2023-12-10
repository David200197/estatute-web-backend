import { QueryHandler } from '@nestjs/cqrs';
import { FindOneInvitationQuery } from './find-one-invitation.query';
import { InvitationRepositoryModel } from '../../models/invitation-repository.model';
import { FindOneInvitationHandlerModel } from './find-one-invitation-handler.model';
import { Inject, HttpException } from '@nestjs/common';
import { INVITATION_REPOSITORY_TOKEN } from '../../providers/invitation-repository.provider';
import { InvitationModel } from '../../models/invitation.model';
import { InvitationNotFoundException } from '../../exceptions/invitation-not-found.exception';
import { Either } from '@src/common/lib/either.lib';

@QueryHandler(FindOneInvitationQuery)
export class FindOneInvitationHandler implements FindOneInvitationHandlerModel {
  constructor(
    @Inject(INVITATION_REPOSITORY_TOKEN)
    private invitationRepository: InvitationRepositoryModel,
  ) {}

  async execute({
    filter,
  }: FindOneInvitationQuery): Promise<Either<HttpException, InvitationModel>> {
    const invitation = await this.invitationRepository.findOne(filter);
    if (!invitation) return Either.left(new InvitationNotFoundException());
    return Either.right(invitation);
  }
}
