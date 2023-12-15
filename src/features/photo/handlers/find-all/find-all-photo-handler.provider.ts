import { FindAllPhotoHandlerModel } from './find-all-photo-handler.model';
import { FindAllPhotoHandler } from './find-all-photo.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [FIND_ALL_PHOTO_HANDLER_TOKEN, FindAllPhotoHandlerProvider] =
  createProvider<FindAllPhotoHandlerModel>(FindAllPhotoHandler);
