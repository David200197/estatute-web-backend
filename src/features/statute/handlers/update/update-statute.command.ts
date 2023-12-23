import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { UpdateStatuteDto } from '../../dto/update-statute.dto';
import { StatuteProps } from '../../models/statute.model';

export class UpdateStatuteCommand {
  constructor(
    public readonly filter: DeepPartial<StatuteProps>,
    public readonly updateStatuteDto: UpdateStatuteDto,
  ) {}
}
