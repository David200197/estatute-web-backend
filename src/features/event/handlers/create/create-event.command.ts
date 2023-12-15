import { CreateEventDto } from '../../dto/create-event.dto';

export class CreateEventCommand {
  constructor(
    public readonly createEventDto: CreateEventDto,
    public readonly photos: Array<Express.Multer.File>,
  ) {}
}
