import { UpdateAnniversaryCommand } from './update-anniversary.command';

import { AnniversaryModel } from '../../models/anniversary.model';
import { Either } from '@src/common/lib/either.lib';
import { HttpException } from '@nestjs/common';
import { ICommandHandler } from '@nestjs/cqrs';

export interface UpdateAnniversaryHandlerModel
  extends ICommandHandler<UpdateAnniversaryCommand> {
  execute(
    command: UpdateAnniversaryCommand,
  ): Promise<Either<HttpException, AnniversaryModel>>;
}
