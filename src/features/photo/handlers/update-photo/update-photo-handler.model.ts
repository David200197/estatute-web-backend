import { UpdatePhotoCommand } from './update-photo.command';
export interface UpdatePhotoHandlerModel {
  execute(updatePhotoCommand: UpdatePhotoCommand): Promise<any>;
}
