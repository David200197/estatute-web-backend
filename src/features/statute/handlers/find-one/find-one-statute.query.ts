import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { StatuteProps } from '../../models/statute.model';

export class FindOneStatuteQuery {
  constructor(public readonly filter: DeepPartial<StatuteProps>) {}
}
