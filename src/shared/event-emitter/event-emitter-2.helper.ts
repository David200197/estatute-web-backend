import { Injectable } from '@nestjs/common';
import { EventEmitterHelperModel } from './event-emitter-helper.model';
import { ListenerSerializer } from '@src/common/lib/listener-serializer.lib';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ListenerResponse } from '@src/common/lib/listener-response.lib';

@Injectable()
export class EventEmitter2Helper implements EventEmitterHelperModel {
  constructor(private eventEmitter: EventEmitter2) {}

  async emitAsync(event: string, ...value: any[]): Promise<ListenerSerializer> {
    const listeners: ListenerResponse[] = await this.eventEmitter.emitAsync(
      event,
      ...value,
    );
    return new ListenerSerializer(listeners);
  }

  emitSync(event: string, ...value: any[]): void {
    this.eventEmitter.emit(event, ...value);
  }
}
