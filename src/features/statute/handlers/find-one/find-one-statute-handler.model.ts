import { FindOneStatuteQuery } from './find-one-statute.query';

import { StatuteModel } from '../../models/statute.model';
import { Either } from '@src/common/lib/either.lib';
import { HttpException } from '@nestjs/common';
import { IQueryHandler } from '@nestjs/cqrs';

export interface FindOneStatuteHandlerModel
  extends IQueryHandler<FindOneStatuteQuery> {
  execute(
    command: FindOneStatuteQuery,
  ): Promise<Either<HttpException, StatuteModel>>;
}
