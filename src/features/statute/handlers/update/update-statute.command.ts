import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { UpdateStatuteDto } from '../../dto/update-statute.dto';
import { StatuteModel } from '../../models/statute.model';

export class UpdateStatuteCommand {
  constructor(
    public readonly filter: DeepPartial<StatuteModel>,
    public readonly updateStatuteDto: UpdateStatuteDto,
  ) {}
}
