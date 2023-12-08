import { createProvider } from '@src/common/utils/create-provider';
import { HashPasswordHelperModel } from './hash-password-helper.model';
import { HashPasswordBcryptHelper } from './hash-password-bcrypt.helper';

export const [HASH_PASSWORD_HELPER_TOKEN, HashPasswordHelperProvider] =
  createProvider<HashPasswordHelperModel>(HashPasswordBcryptHelper);
