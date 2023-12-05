import { ListenerResponse } from './listener-response.lib';

export class ListenerSerializer {
  private readonly listenersMap: Map<string, ListenerResponse['data']>;
  constructor(listeners: ListenerResponse[]) {
    for (const { listener, data } of listeners)
      this.listenersMap.set(listener, data);
  }
  getData<T>(listener: string) {
    return this.listenersMap.get(listener) as T;
  }
}
