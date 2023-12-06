import { createSymbolProvider } from '@src/common/utils/create-symbol-provider';
import { AuthHelperModel } from '../models/auth-helper.model';
import { AuthBycryptHelper } from '../helpers/auth-bcrypt.helper';

export const [AUTH_HELPER_TOKEN, AuthHelperProvider] =
  createSymbolProvider<AuthHelperModel>(AuthBycryptHelper);
