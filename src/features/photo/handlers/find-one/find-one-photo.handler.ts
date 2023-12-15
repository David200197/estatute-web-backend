import { QueryHandler } from '@nestjs/cqrs';
import { FindOnePhotoQuery } from './find-one-photo.query';
import { PhotoRepositoryModel } from '../../models/photo-repository.model';
import { FindOnePhotoHandlerModel } from './find-one-photo-handler.model';
import { Inject, HttpException } from '@nestjs/common';
import { PHOTO_REPOSITORY_TOKEN } from '../../providers/photo-repository.provider';
import { PhotoModel } from '../../models/photo.model';
import { PhotoNotFoundException } from '../../exceptions/photo-not-found.exception';
import { Either } from '@src/common/lib/either.lib';

@QueryHandler(FindOnePhotoQuery)
export class FindOnePhotoHandler implements FindOnePhotoHandlerModel {
  constructor(
    @Inject(PHOTO_REPOSITORY_TOKEN)
    private photoRepository: PhotoRepositoryModel,
  ) {}

  async execute({
    filter,
  }: FindOnePhotoQuery): Promise<Either<HttpException, PhotoModel>> {
    const photo = await this.photoRepository.findOne(filter);
    if (!photo) return Either.left(new PhotoNotFoundException());
    return Either.right(photo);
  }
}
