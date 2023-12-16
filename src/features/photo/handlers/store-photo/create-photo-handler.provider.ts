import { StorePhotoHandlerModel } from './create-photo-handler.model';
import { StorePhotoHandler } from './create-photo.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [STORE_PHOTO_HANDLER_TOKEN, StorePhotoHandlerProvider] =
  createProvider<StorePhotoHandlerModel>(StorePhotoHandler);
