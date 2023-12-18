import { createProvider } from '@src/common/utils/create-provider';
import { HashPasswordServiceModel } from './hash-password-service.model';
import { HashPasswordArgonService } from './hash-password-argon.service';

export const [HASH_PASSWORD_SERVICE_TOKEN, HashPasswordServiceProvider] =
  createProvider<HashPasswordServiceModel>(HashPasswordArgonService);
