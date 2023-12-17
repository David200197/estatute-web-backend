import { createProvider } from '@src/common/utils/create-provider';
import { PhotoFileManagerServiceModel } from '../models/photo-file-manager-service.model';
import { PhotoFileManagerService } from '../services/photo-file-manager.service';

export const [
  PHOTO_FILE_MANAGER_SERVICE_TOKEN,
  PhotoFileManagerServiceProvider,
] = createProvider<PhotoFileManagerServiceModel>(PhotoFileManagerService);
