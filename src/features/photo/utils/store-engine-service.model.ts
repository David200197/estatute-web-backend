export interface StoreEngineServiceModel {
  store(name: string, buffers: Buffer[]): Promise<string[]>;
}
