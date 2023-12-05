import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { UpdateInvitationDto } from '../../dto/update-invitation.dto';
import { InvitationModel } from '../../models/invitation.model';

export class UpdateInvitationCommand {
  constructor(
    public readonly filter: DeepPartial<InvitationModel>,
    public readonly updateInvitationDto: UpdateInvitationDto,
  ) {}
}
