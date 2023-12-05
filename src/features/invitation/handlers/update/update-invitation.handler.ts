import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateInvitationCommand } from './update-invitation.command';
import { InvitationRepositoryModel } from '../../models/invitation-repository.model';
import { UpdateInvitationHandlerModel } from './update-invitation-handler.model';
import { Inject } from '@nestjs/common';
import { INVITATION_REPOSITORY_TOKEN } from '../../providers/invitation-repository.provider';
import { InvitationModel } from '../../models/invitation.model';

@CommandHandler(UpdateInvitationCommand)
export class UpdateInvitationHandler
  implements
    UpdateInvitationHandlerModel,
    ICommandHandler<UpdateInvitationCommand>
{
  constructor(
    @Inject(INVITATION_REPOSITORY_TOKEN)
    private invitationRepository: InvitationRepositoryModel,
  ) {}

  async execute({
    filter,
    updateInvitationDto,
  }: UpdateInvitationCommand): Promise<InvitationModel> {
    return this.invitationRepository.updateOne(filter, updateInvitationDto);
  }
}
