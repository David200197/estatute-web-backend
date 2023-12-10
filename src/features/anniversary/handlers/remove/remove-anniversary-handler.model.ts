import { RemoveAnniversaryCommand } from './remove-anniversary.command';

import { AnniversaryModel } from '../../models/anniversary.model';
import { Either } from '@src/common/lib/either.lib';
import { HttpException } from '@nestjs/common';
import { ICommandHandler } from '@nestjs/cqrs';

export interface RemoveAnniversaryHandlerModel
  extends ICommandHandler<RemoveAnniversaryCommand> {
  execute(
    command: RemoveAnniversaryCommand,
  ): Promise<Either<HttpException, AnniversaryModel>>;
}
