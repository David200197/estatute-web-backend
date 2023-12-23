import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { EventProps } from '../../models/event.model';

export class FindOneEventQuery {
  constructor(public readonly filter: DeepPartial<EventProps>) {}
}
