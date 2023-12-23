import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { UpdateAnniversaryDto } from '../../dto/update-anniversary.dto';
import { AnniversaryProps } from '../../models/anniversary.model';

export class UpdateAnniversaryCommand {
  constructor(
    public readonly filter: DeepPartial<AnniversaryProps>,
    public readonly updateAnniversaryDto: UpdateAnniversaryDto,
  ) {}
}
