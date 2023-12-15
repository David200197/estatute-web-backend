import { CommandHandler } from '@nestjs/cqrs';
import { UpdatePhotoCommand } from './update-photo.command';
import { PhotoRepositoryModel } from '../../models/photo-repository.model';
import { UpdatePhotoHandlerModel } from './update-photo-handler.model';
import { Inject, HttpException } from '@nestjs/common';
import { PHOTO_REPOSITORY_TOKEN } from '../../providers/photo-repository.provider';
import { PhotoModel } from '../../models/photo.model';
import { PhotoNotFoundException } from '../../exceptions/photo-not-found.exception';
import { Either } from '@src/common/lib/either.lib';

@CommandHandler(UpdatePhotoCommand)
export class UpdatePhotoHandler implements UpdatePhotoHandlerModel {
  constructor(
    @Inject(PHOTO_REPOSITORY_TOKEN)
    private photoRepository: PhotoRepositoryModel,
  ) {}

  async execute({
    filter,
    updatePhotoDto,
  }: UpdatePhotoCommand): Promise<Either<HttpException, PhotoModel>> {
    const photo = await this.photoRepository.updateOne(filter, updatePhotoDto);
    if (!photo) return Either.left(new PhotoNotFoundException());
    return Either.right(photo);
  }
}
