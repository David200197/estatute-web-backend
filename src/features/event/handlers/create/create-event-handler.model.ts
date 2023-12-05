import { CreateEventCommand } from './create-event.command';
import { EventModel } from '../../models/event.model';
export interface CreateEventHandlerModel {
  execute(command: CreateEventCommand): Promise<EventModel>;
}
