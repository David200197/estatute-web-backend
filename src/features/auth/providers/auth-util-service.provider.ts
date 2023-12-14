import { createProvider } from '@src/common/utils/create-provider';
import { AuthUtilService } from '../utils/auth-util.service';

export const [AUTH_UTILS_SERVICE_MODEL, AuthUtilsServiceProvider] =
  createProvider(AuthUtilService);
