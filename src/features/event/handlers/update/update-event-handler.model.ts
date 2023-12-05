import { UpdateEventCommand } from './update-event.command';
import { EventModel } from '../../models/event.model';
export interface UpdateEventHandlerModel {
  execute(command: UpdateEventCommand): Promise<EventModel>;
}
