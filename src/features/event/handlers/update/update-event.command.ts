import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { UpdateEventDto } from '../../dto/update-event.dto';
import { EventModel } from '../../models/event.model';

export class UpdateEventCommand {
  constructor(
    public readonly filter: DeepPartial<EventModel>,
    public readonly updateEventDto: UpdateEventDto,
  ) {}
}
