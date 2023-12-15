import { FindOnePhotoQuery } from './find-one-photo.query';

import { PhotoModel } from '../../models/photo.model';
import { Either } from '@src/common/lib/either.lib';
import { HttpException } from '@nestjs/common';
import { IQueryHandler } from '@nestjs/cqrs';

export interface FindOnePhotoHandlerModel
  extends IQueryHandler<FindOnePhotoQuery> {
  execute(
    command: FindOnePhotoQuery,
  ): Promise<Either<HttpException, PhotoModel>>;
}
