import { FindAllPhotoQuery } from './find-all-photo.query';

import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { PhotosModel } from '../../models/photos.model';
import { IQueryHandler } from '@nestjs/cqrs';

export interface FindAllPhotoHandlerModel
  extends IQueryHandler<FindAllPhotoQuery> {
  execute(
    command: FindAllPhotoQuery,
  ): Promise<ResponseWithPaginate<PhotosModel>>;
}
