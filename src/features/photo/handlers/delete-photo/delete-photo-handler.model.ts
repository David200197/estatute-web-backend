import { Either } from '@src/common/lib/either.lib';
import { DeletePhotoCommand } from './delete-photo.command';
import { HttpException } from '@nestjs/common';
export interface DeletePhotoHandlerModel {
  execute(
    deleteStoreCommand: DeletePhotoCommand,
  ): Promise<Either<HttpException, boolean>>;
}
