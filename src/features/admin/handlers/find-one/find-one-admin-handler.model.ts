import { FindOneAdminQuery } from './find-one-admin.query';

import { AdminModel } from '../../models/admin.model';
import { Either } from '@src/common/lib/either.lib';
import { HttpException } from '@nestjs/common';
import { IQueryHandler } from '@nestjs/cqrs';

export interface FindOneAdminHandlerModel
  extends IQueryHandler<FindOneAdminQuery> {
  execute(
    command: FindOneAdminQuery,
  ): Promise<Either<HttpException, AdminModel>>;
}
