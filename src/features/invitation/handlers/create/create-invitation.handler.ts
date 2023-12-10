import { CommandHandler } from '@nestjs/cqrs';
import { CreateInvitationCommand } from './create-invitation.command';
import { InvitationRepositoryModel } from '../../models/invitation-repository.model';
import { CreateInvitationHandlerModel } from './create-invitation-handler.model';
import { Inject } from '@nestjs/common';
import { INVITATION_REPOSITORY_TOKEN } from '../../providers/invitation-repository.provider';
import { InvitationModel } from '../../models/invitation.model';

@CommandHandler(CreateInvitationCommand)
export class CreateInvitationHandler implements CreateInvitationHandlerModel {
  constructor(
    @Inject(INVITATION_REPOSITORY_TOKEN)
    private invitationRepository: InvitationRepositoryModel,
  ) {}

  execute({
    createInvitationDto,
  }: CreateInvitationCommand): Promise<InvitationModel> {
    return this.invitationRepository.create(createInvitationDto);
  }
}
