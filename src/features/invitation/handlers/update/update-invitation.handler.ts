import { CommandHandler } from '@nestjs/cqrs';
import { UpdateInvitationCommand } from './update-invitation.command';
import { InvitationRepositoryModel } from '../../models/invitation-repository.model';
import { UpdateInvitationHandlerModel } from './update-invitation-handler.model';
import { Inject, HttpException } from '@nestjs/common';
import { INVITATION_REPOSITORY_TOKEN } from '../../providers/invitation-repository.provider';
import { InvitationModel } from '../../models/invitation.model';
import { InvitationNotFoundException } from '../../exceptions/invitation-not-found.exception';
import { Either } from '@src/common/lib/either.lib';

@CommandHandler(UpdateInvitationCommand)
export class UpdateInvitationHandler implements UpdateInvitationHandlerModel {
  constructor(
    @Inject(INVITATION_REPOSITORY_TOKEN)
    private invitationRepository: InvitationRepositoryModel,
  ) {}

  async execute({
    filter,
    updateInvitationDto,
  }: UpdateInvitationCommand): Promise<Either<HttpException, InvitationModel>> {
    const invitation = await this.invitationRepository.updateOne(
      filter,
      updateInvitationDto,
    );
    if (!invitation) return Either.left(new InvitationNotFoundException());
    return Either.right(invitation);
  }
}
