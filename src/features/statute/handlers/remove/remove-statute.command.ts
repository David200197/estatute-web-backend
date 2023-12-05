import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { StatuteModel } from '../../models/statute.model';

export class RemoveStatuteCommand {
  constructor(public readonly filter: DeepPartial<StatuteModel>) {}
}
