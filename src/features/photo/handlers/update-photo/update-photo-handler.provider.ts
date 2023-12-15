import { UpdatePhotoHandlerModel } from './update-photo-handler.model';
import { UpdatePhotoHandler } from './update-photo.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [UPDATE_PHOTO_HANDLER_TOKEN, UpdatePhotoHandlerProvider] =
  createProvider<UpdatePhotoHandlerModel>(UpdatePhotoHandler);
