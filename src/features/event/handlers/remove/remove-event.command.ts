import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { EventProps } from '../../models/event.model';

export class RemoveEventCommand {
  constructor(public readonly filter: DeepPartial<EventProps>) {}
}
