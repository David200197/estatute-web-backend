import { CreateEventCommand } from './create-event.command';

import { EventModel } from '../../models/event.model';
import { ICommandHandler } from '@nestjs/cqrs';

export interface CreateEventHandlerModel
  extends ICommandHandler<CreateEventCommand> {
  execute(command: CreateEventCommand): Promise<EventModel>;
}
