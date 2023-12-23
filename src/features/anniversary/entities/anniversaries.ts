import { Entities } from '@src/common/abstracts/entities.abstracts';
import {
  AnniversaryModel,
  AnniversaryProps,
} from '../models/anniversary.model';
import { AnniversariesModel } from '../models/anniversaries.model';
import { Anniversary } from './anniversary';
import { SelfPartial } from '@src/common/interfaces/self-partial';

export class Anniversaries
  extends Entities<AnniversaryModel>
  implements AnniversariesModel
{
  private constructor(public readonly value: AnniversaryModel[]) {
    super(value);
  }

  static create(value: SelfPartial<AnniversaryProps, 'uuid'>[]) {
    if (!Array.isArray(value))
      throw new TypeError('Anniversaries is not a array');
    return new Anniversaries(value.map((data) => Anniversary.create(data)));
  }
}
