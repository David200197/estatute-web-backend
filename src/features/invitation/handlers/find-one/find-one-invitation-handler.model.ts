import { FindOneInvitationQuery } from './find-one-invitation.query';

import { InvitationModel } from '../../models/invitation.model';
import { Either } from '@src/common/lib/either.lib';
import { HttpException } from '@nestjs/common';
import { IQueryHandler } from '@nestjs/cqrs';

export interface FindOneInvitationHandlerModel
  extends IQueryHandler<FindOneInvitationQuery> {
  execute(
    command: FindOneInvitationQuery,
  ): Promise<Either<HttpException, InvitationModel>>;
}
