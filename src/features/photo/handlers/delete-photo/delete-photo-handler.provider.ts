import { DeletePhotoHandlerModel } from './delete-photo-handler.model';
import { DeletePhotoHandler } from './delete-store.handler';
import { createProvider } from '@src/common/utils/create-provider';

export const [DELETE_PHOTO_HANDLER_TOKEN, DeletePhotoHandlerProvider] =
  createProvider<DeletePhotoHandlerModel>(DeletePhotoHandler);
