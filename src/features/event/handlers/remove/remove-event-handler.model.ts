import { RemoveEventCommand } from './remove-event.command';
import { EventModel } from '../../models/event.model';
export interface RemoveEventHandlerModel {
  execute(command: RemoveEventCommand): Promise<EventModel>;
}
