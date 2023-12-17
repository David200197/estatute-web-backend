import { createProvider } from '@src/common/utils/create-provider';
import { PhotoServiceModel } from '../models/photo-service.model';
import { PhotoService } from '../services/photo.service';

export const [PHOTO_SERVICE_TOKEN, PhotoServiceProvider] =
  createProvider<PhotoServiceModel>(PhotoService);
