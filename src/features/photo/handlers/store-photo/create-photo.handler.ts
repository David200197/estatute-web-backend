import { CommandHandler } from '@nestjs/cqrs';
import { StorePhotoCommand } from './create-photo.command';
import { StorePhotoHandlerModel } from './create-photo-handler.model';
import { PhotoFileManagerServiceModel } from '../../models/photo-file-manager-service.model';
import { Inject } from '@nestjs/common';
import { PHOTO_FILE_MANAGER_SERVICE_TOKEN } from '../../providers/photo-file-manager-service.provider';

@CommandHandler(StorePhotoCommand)
export class StorePhotoHandler implements StorePhotoHandlerModel {
  constructor(
    @Inject(PHOTO_FILE_MANAGER_SERVICE_TOKEN)
    private readonly photoFileManagerService: PhotoFileManagerServiceModel,
  ) {}

  execute({ storePhotoDto }: StorePhotoCommand): Promise<string[]> {
    return this.photoFileManagerService.store(storePhotoDto);
  }
}
