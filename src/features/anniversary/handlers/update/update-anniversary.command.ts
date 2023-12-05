import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { UpdateAnniversaryDto } from '../../dto/update-anniversary.dto';
import { AnniversaryModel } from '../../models/anniversary.model';

export class UpdateAnniversaryCommand {
  constructor(
    public readonly filter: DeepPartial<AnniversaryModel>,
    public readonly updateAnniversaryDto: UpdateAnniversaryDto,
  ) {}
}
