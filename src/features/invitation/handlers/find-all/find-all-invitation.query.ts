import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { InvitationModel } from '../../models/invitation.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';

export class FindAllInvitationQuery {
  constructor(
    public readonly filter: DeepPartial<InvitationModel>,
    public readonly options: FindAllDto,
  ) {}
}
