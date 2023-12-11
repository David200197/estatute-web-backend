import { Injectable } from '@nestjs/common';
import { EventEmitterServiceModel } from './event-emitter-service.model';
import { ListenerSerializer } from '@src/common/lib/listener-serializer.lib';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ListenerResponse } from '@src/common/lib/listener-response.lib';

@Injectable()
export class EventEmitter2Service implements EventEmitterServiceModel {
  constructor(private eventEmitter: EventEmitter2) {}

  async emitAsync(event: string, ...value: any[]): Promise<ListenerSerializer> {
    const listeners: ListenerResponse[] = await this.eventEmitter.emitAsync(
      event,
      ...value,
    );
    return new ListenerSerializer(
      listeners.filter((listen) => listen instanceof ListenerResponse),
    );
  }

  emitSync(event: string, ...value: any[]): void {
    this.eventEmitter.emit(event, ...value);
  }
}
