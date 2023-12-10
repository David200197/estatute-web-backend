import { FindOneAnniversaryQuery } from './find-one-anniversary.query';

import { AnniversaryModel } from '../../models/anniversary.model';
import { Either } from '@src/common/lib/either.lib';
import { HttpException } from '@nestjs/common';
import { IQueryHandler } from '@nestjs/cqrs';

export interface FindOneAnniversaryHandlerModel
  extends IQueryHandler<FindOneAnniversaryQuery> {
  execute(
    command: FindOneAnniversaryQuery,
  ): Promise<Either<HttpException, AnniversaryModel>>;
}
