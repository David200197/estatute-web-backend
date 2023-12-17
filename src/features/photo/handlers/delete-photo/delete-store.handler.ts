import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeletePhotoCommand } from './delete-photo.command';
import { DeletePhotoHandlerModel } from './delete-photo-handler.model';
import { Either } from '@src/common/lib/either.lib';
import { HttpException, Inject } from '@nestjs/common';
import { PHOTO_FILE_MANAGER_SERVICE_TOKEN } from '../../providers/photo-file-manager-service.provider';
import { PhotoFileManagerServiceModel } from '../../models/photo-file-manager-service.model';

@CommandHandler(DeletePhotoCommand)
export class DeletePhotoHandler
  implements DeletePhotoHandlerModel, ICommandHandler<DeletePhotoCommand>
{
  constructor(
    @Inject(PHOTO_FILE_MANAGER_SERVICE_TOKEN)
    private readonly photoFileManager: PhotoFileManagerServiceModel,
  ) {}

  execute({
    deletePhotoDto,
  }: DeletePhotoCommand): Promise<Either<HttpException, boolean>> {
    return this.photoFileManager.delete(deletePhotoDto);
  }
}
