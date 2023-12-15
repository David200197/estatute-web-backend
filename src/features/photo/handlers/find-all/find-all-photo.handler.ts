import { QueryHandler } from '@nestjs/cqrs';
import { FindAllPhotoQuery } from './find-all-photo.query';
import { PhotoRepositoryModel } from '../../models/photo-repository.model';
import { FindAllPhotoHandlerModel } from './find-all-photo-handler.model';
import { Inject } from '@nestjs/common';
import { PHOTO_REPOSITORY_TOKEN } from '../../providers/photo-repository.provider';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { PhotosModel } from '../../models/photos.model';

@QueryHandler(FindAllPhotoQuery)
export class FindAllPhotoHandler implements FindAllPhotoHandlerModel {
  constructor(
    @Inject(PHOTO_REPOSITORY_TOKEN)
    private photoRepository: PhotoRepositoryModel,
  ) {}

  async execute({
    filter,
    options,
  }: FindAllPhotoQuery): Promise<ResponseWithPaginate<PhotosModel>> {
    return await this.photoRepository.findAll(filter, options);
  }
}
