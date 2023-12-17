import { createProvider } from '@src/common/utils/create-provider';
import { AuthUtilService } from '../services/auth-util.service';

export const [AUTH_UTILS_SERVICE_MODEL, AuthUtilsServiceProvider] =
  createProvider(AuthUtilService);
