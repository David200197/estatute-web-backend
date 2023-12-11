import { ListenerSerializer } from '@src/common/lib/listener-serializer.lib';

export interface EventEmitterServiceModel {
  emitAsync(event: string, ...value: any[]): Promise<ListenerSerializer>;
  emitSync(event: string, ...value: any[]): void;
}
