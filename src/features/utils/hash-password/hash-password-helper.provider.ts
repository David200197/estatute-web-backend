import { createSymbolProvider } from '@src/common/utils/create-symbol-provider';
import { HashPasswordHelperModel } from './hash-password-helper.model';
import { HashPasswordBcryptHelper } from './hash-password-bcrypt.helper';

export const [HASH_PASSWORD_HELPER_TOKEN, HashPasswordHelperProvider] =
  createSymbolProvider<HashPasswordHelperModel>(HashPasswordBcryptHelper);
