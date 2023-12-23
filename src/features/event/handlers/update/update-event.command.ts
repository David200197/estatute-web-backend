import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { UpdateEventDto } from '../../dto/update-event.dto';
import { EventProps } from '../../models/event.model';

export class UpdateEventCommand {
  constructor(
    public readonly filter: DeepPartial<EventProps>,
    public readonly updateEventDto: UpdateEventDto,
    public readonly photos?: Array<Express.Multer.File>,
  ) {}
}
