import { CreateInvitationDto } from '../../dto/create-invitation.dto';

export class CreateInvitationCommand {
  constructor(public readonly createInvitationDto: CreateInvitationDto) {}
}
