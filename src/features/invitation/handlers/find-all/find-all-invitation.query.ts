import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { InvitationProps } from '../../models/invitation.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';

export class FindAllInvitationQuery {
  constructor(
    public readonly filter: DeepPartial<InvitationProps>,
    public readonly options: FindAllDto,
  ) {}
}
