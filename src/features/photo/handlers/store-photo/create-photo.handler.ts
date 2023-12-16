import { CommandHandler } from '@nestjs/cqrs';
import { StorePhotoCommand } from './create-photo.command';
import { StorePhotoHandlerModel } from './create-photo-handler.model';
import { PhotoFileManagerModel } from '../../models/photo-file-manager.model';
import { Inject } from '@nestjs/common';
import { PHOTO_FILE_MANAGER_TOKEN } from '../../providers/photo-file-manager.provider';

@CommandHandler(StorePhotoCommand)
export class StorePhotoHandler implements StorePhotoHandlerModel {
  constructor(
    @Inject(PHOTO_FILE_MANAGER_TOKEN)
    private readonly photoFileManager: PhotoFileManagerModel,
  ) {}

  execute({ storePhotoDto }: StorePhotoCommand): Promise<string[]> {
    return this.photoFileManager.store(storePhotoDto);
  }
}
