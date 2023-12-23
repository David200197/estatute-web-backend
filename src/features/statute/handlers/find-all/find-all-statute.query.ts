import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { StatuteProps } from '../../models/statute.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';

export class FindAllStatuteQuery {
  constructor(
    public readonly filter: DeepPartial<StatuteProps>,
    public readonly options: FindAllDto,
  ) {}
}
