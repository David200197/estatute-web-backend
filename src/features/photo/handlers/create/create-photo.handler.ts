import { CommandHandler } from '@nestjs/cqrs';
import { CreatePhotoCommand } from './create-photo.command';
import { PhotoRepositoryModel } from '../../models/photo-repository.model';
import { CreatePhotoHandlerModel } from './create-photo-handler.model';
import { Inject } from '@nestjs/common';
import { PHOTO_REPOSITORY_TOKEN } from '../../providers/photo-repository.provider';
import { PhotoModel } from '../../models/photo.model';

@CommandHandler(CreatePhotoCommand)
export class CreatePhotoHandler implements CreatePhotoHandlerModel {
  constructor(
    @Inject(PHOTO_REPOSITORY_TOKEN)
    private photoRepository: PhotoRepositoryModel,
  ) {}

  execute({ createPhotoDto }: CreatePhotoCommand): Promise<PhotoModel> {
    return this.photoRepository.create(createPhotoDto);
  }
}
