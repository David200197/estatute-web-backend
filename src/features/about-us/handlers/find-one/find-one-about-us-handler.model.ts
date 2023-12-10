import { FindOneAboutUsQuery } from './find-one-about-us.query';

import { AboutUsModel } from '../../models/about-us.model';
import { Either } from '@src/common/lib/either.lib';
import { HttpException } from '@nestjs/common';
import { IQueryHandler } from '@nestjs/cqrs';

export interface FindOneAboutUsHandlerModel
  extends IQueryHandler<FindOneAboutUsQuery> {
  execute(
    command: FindOneAboutUsQuery,
  ): Promise<Either<HttpException, AboutUsModel>>;
}
