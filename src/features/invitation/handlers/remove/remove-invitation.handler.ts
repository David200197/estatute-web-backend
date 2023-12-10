import { CommandHandler } from '@nestjs/cqrs';
import { RemoveInvitationCommand } from './remove-invitation.command';
import { InvitationRepositoryModel } from '../../models/invitation-repository.model';
import { RemoveInvitationHandlerModel } from './remove-invitation-handler.model';
import { Inject, HttpException } from '@nestjs/common';
import { INVITATION_REPOSITORY_TOKEN } from '../../providers/invitation-repository.provider';
import { InvitationModel } from '../../models/invitation.model';
import { InvitationNotFoundException } from '../../exceptions/invitation-not-found.exception';
import { Either } from '@src/common/lib/either.lib';

@CommandHandler(RemoveInvitationCommand)
export class RemoveInvitationHandler implements RemoveInvitationHandlerModel {
  constructor(
    @Inject(INVITATION_REPOSITORY_TOKEN)
    private invitationRepository: InvitationRepositoryModel,
  ) {}

  async execute({
    filter,
  }: RemoveInvitationCommand): Promise<Either<HttpException, InvitationModel>> {
    const invitation = await this.invitationRepository.removeOne(filter);
    if (!invitation) return Either.left(new InvitationNotFoundException());
    return Either.right(invitation);
  }
}
