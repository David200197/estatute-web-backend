import { CommandHandler } from '@nestjs/cqrs';
import { RemovePhotoCommand } from './remove-photo.command';
import { PhotoRepositoryModel } from '../../models/photo-repository.model';
import { RemovePhotoHandlerModel } from './remove-photo-handler.model';
import { Inject, HttpException } from '@nestjs/common';
import { PHOTO_REPOSITORY_TOKEN } from '../../providers/photo-repository.provider';
import { PhotoModel } from '../../models/photo.model';
import { PhotoNotFoundException } from '../../exceptions/photo-not-found.exception';
import { Either } from '@src/common/lib/either.lib';

@CommandHandler(RemovePhotoCommand)
export class RemovePhotoHandler implements RemovePhotoHandlerModel {
  constructor(
    @Inject(PHOTO_REPOSITORY_TOKEN)
    private photoRepository: PhotoRepositoryModel,
  ) {}

  async execute({
    filter,
  }: RemovePhotoCommand): Promise<Either<HttpException, PhotoModel>> {
    const photo = await this.photoRepository.removeOne(filter);
    if (!photo) return Either.left(new PhotoNotFoundException());
    return Either.right(photo);
  }
}
