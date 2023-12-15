import { createProvider } from '@src/common/utils/create-provider';
import { StoreEngineServiceModel } from './store-engine-service.model';
import { StoreLocalEngineService } from './store-local-engine.service';

export const [STORE_ENGINE_SERVICE_TOKEN, StoreEngineServiceProvider] =
  createProvider<StoreEngineServiceModel>(StoreLocalEngineService);
