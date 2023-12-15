import { CreatePhotoHandlerModel } from './create-photo-handler.model';
import { StorePhotoHandler } from './create-photo.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [CREATE_PHOTO_HANDLER_TOKEN, CreatePhotoHandlerProvider] =
  createProvider<CreatePhotoHandlerModel>(StorePhotoHandler);
