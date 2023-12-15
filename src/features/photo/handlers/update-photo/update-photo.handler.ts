import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdatePhotoCommand } from './update-photo.command';
import { UpdatePhotoHandlerModel } from './update-photo-handler.model';
import { Either } from '@src/common/lib/either.lib';
import { HttpException, Inject } from '@nestjs/common';
import { PHOTO_FILE_MANAGER } from '../../providers/photo-file-manager.provider';
import { PhotoFileManagerModel } from '../../models/photo-file-manager.model';

@CommandHandler(UpdatePhotoCommand)
export class UpdatePhotoHandler
  implements UpdatePhotoHandlerModel, ICommandHandler<UpdatePhotoCommand>
{
  constructor(
    @Inject(PHOTO_FILE_MANAGER)
    private readonly photoFileManager: PhotoFileManagerModel,
  ) {}

  execute({
    updatePhotoDto,
  }: UpdatePhotoCommand): Promise<Either<HttpException, string[]>> {
    return this.photoFileManager.update(updatePhotoDto);
  }
}
