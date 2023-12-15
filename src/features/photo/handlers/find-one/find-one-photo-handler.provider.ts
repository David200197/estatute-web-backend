import { FindOnePhotoHandlerModel } from './find-one-photo-handler.model';
import { FindOnePhotoHandler } from './find-one-photo.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [FIND_ONE_PHOTO_HANDLER_TOKEN, FindOnePhotoHandlerProvider] =
  createProvider<FindOnePhotoHandlerModel>(FindOnePhotoHandler);
