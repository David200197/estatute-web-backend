import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { AnniversaryModel } from '../../models/anniversary.model';

export class FindOneAnniversaryQuery {
  constructor(public readonly filter: DeepPartial<AnniversaryModel>) {}
}
