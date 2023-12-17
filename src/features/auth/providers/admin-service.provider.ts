import { createProvider } from '@src/common/utils/create-provider';
import { AdminServiceModel } from '../models/admin-service.model';
import { AdminService } from '../services/admin.service';

export const [ADMIN_SERVICE_TOKEN, AdminServiceProvider] =
  createProvider<AdminServiceModel>(AdminService);
