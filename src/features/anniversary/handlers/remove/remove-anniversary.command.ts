import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { AnniversaryModel } from '../../models/anniversary.model';

export class RemoveAnniversaryCommand {
  constructor(public readonly filter: DeepPartial<AnniversaryModel>) {}
}
