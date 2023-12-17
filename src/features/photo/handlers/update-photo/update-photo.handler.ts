import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdatePhotoCommand } from './update-photo.command';
import { UpdatePhotoHandlerModel } from './update-photo-handler.model';
import { Either } from '@src/common/lib/either.lib';
import { HttpException, Inject } from '@nestjs/common';
import { PHOTO_FILE_MANAGER_SERVICE_TOKEN } from '../../providers/photo-file-manager-service.provider';
import { PhotoFileManagerServiceModel } from '../../models/photo-file-manager-service.model';

@CommandHandler(UpdatePhotoCommand)
export class UpdatePhotoHandler
  implements UpdatePhotoHandlerModel, ICommandHandler<UpdatePhotoCommand>
{
  constructor(
    @Inject(PHOTO_FILE_MANAGER_SERVICE_TOKEN)
    private readonly photoFileManagerService: PhotoFileManagerServiceModel,
  ) {}

  execute({
    updatePhotoDto,
  }: UpdatePhotoCommand): Promise<Either<HttpException, string[]>> {
    return this.photoFileManagerService.update(updatePhotoDto);
  }
}
