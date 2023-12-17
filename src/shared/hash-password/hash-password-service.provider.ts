import { createProvider } from '@src/common/utils/create-provider';
import { HashPasswordServiceModel } from './hash-password-helper-service.model';
import { HashPasswordBcryptService } from './hash-password-bcrypt.service';

export const [HASH_PASSWORD_SERVICE_TOKEN, HashPasswordServiceProvider] =
  createProvider<HashPasswordServiceModel>(HashPasswordBcryptService);
