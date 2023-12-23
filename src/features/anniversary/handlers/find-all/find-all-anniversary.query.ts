import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { AnniversaryProps } from '../../models/anniversary.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';

export class FindAllAnniversaryQuery {
  constructor(
    public readonly filter: DeepPartial<AnniversaryProps>,
    public readonly options: FindAllDto,
  ) {}
}
