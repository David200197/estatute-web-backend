import { createProvider } from '@src/common/utils/create-provider';
import { PhotoFileManagerModel } from '../models/photo-file-manager.model';
import { PhotoFileManager } from '../file-manager/photo.file-manager';

export const [PHOTO_FILE_MANAGER, PhotoFileManagerProvider] =
  createProvider<PhotoFileManagerModel>(PhotoFileManager);
