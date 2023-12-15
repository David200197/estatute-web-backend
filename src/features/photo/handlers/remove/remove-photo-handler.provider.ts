import { RemovePhotoHandlerModel } from './remove-photo-handler.model';
import { RemovePhotoHandler } from './remove-photo.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [REMOVE_PHOTO_HANDLER_TOKEN, RemovePhotoHandlerProvider] =
  createProvider<RemovePhotoHandlerModel>(RemovePhotoHandler);
