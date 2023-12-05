import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RemoveInvitationCommand } from './remove-invitation.command';
import { InvitationRepositoryModel } from '../../models/invitation-repository.model';
import { RemoveInvitationHandlerModel } from './remove-invitation-handler.model';
import { Inject } from '@nestjs/common';
import { INVITATION_REPOSITORY_TOKEN } from '../../providers/invitation-repository.provider';
import { InvitationModel } from '../../models/invitation.model';

@CommandHandler(RemoveInvitationCommand)
export class RemoveInvitationHandler
  implements
    RemoveInvitationHandlerModel,
    ICommandHandler<RemoveInvitationCommand>
{
  constructor(
    @Inject(INVITATION_REPOSITORY_TOKEN)
    private invitationRepository: InvitationRepositoryModel,
  ) {}

  execute({ filter }: RemoveInvitationCommand): Promise<InvitationModel> {
    return this.invitationRepository.removeOne(filter);
  }
}
