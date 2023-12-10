import { FindOneEventQuery } from './find-one-event.query';

import { EventModel } from '../../models/event.model';
import { Either } from '@src/common/lib/either.lib';
import { HttpException } from '@nestjs/common';
import { IQueryHandler } from '@nestjs/cqrs';

export interface FindOneEventHandlerModel
  extends IQueryHandler<FindOneEventQuery> {
  execute(
    command: FindOneEventQuery,
  ): Promise<Either<HttpException, EventModel>>;
}
