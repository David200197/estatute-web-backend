import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { UpdateInvitationDto } from '../../dto/update-invitation.dto';
import { InvitationProps } from '../../models/invitation.model';

export class UpdateInvitationCommand {
  constructor(
    public readonly filter: DeepPartial<InvitationProps>,
    public readonly updateInvitationDto: UpdateInvitationDto,
  ) {}
}
