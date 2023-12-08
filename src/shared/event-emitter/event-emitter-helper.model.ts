import { ListenerSerializer } from '@src/common/lib/listener-serializer.lib';

export interface EventEmitterHelperModel {
  emitAsync(event: string, ...value: any[]): Promise<ListenerSerializer>;
  emitSync(event: string, ...value: any[]): void;
}
