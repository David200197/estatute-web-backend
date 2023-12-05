import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { EventModel } from '../../models/event.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';

export class FindAllEventQuery {
  constructor(
    public readonly filter: DeepPartial<EventModel>,
    public readonly options: FindAllDto,
  ) {}
}
