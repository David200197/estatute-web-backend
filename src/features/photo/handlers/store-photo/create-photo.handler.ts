import { CommandHandler } from '@nestjs/cqrs';
import { StorePhotoCommand } from './create-photo.command';
import { CreatePhotoHandlerModel, Urls } from './create-photo-handler.model';
import { PhotoFileManagerModel } from '../../models/photo-file-manager.model';
import { Inject } from '@nestjs/common';
import { PHOTO_FILE_MANAGER } from '../../providers/photo-file-manager.provider';

@CommandHandler(StorePhotoCommand)
export class StorePhotoHandler implements CreatePhotoHandlerModel {
  constructor(
    @Inject(PHOTO_FILE_MANAGER)
    private readonly photoFileManager: PhotoFileManagerModel,
  ) {}

  execute({ storePhotoDto }: StorePhotoCommand): Promise<Urls> {
    return this.photoFileManager.store(storePhotoDto);
  }
}
