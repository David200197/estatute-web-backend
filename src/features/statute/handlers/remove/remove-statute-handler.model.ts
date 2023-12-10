import { RemoveStatuteCommand } from './remove-statute.command';

import { StatuteModel } from '../../models/statute.model';
import { Either } from '@src/common/lib/either.lib';
import { HttpException } from '@nestjs/common';
import { ICommandHandler } from '@nestjs/cqrs';

export interface RemoveStatuteHandlerModel
  extends ICommandHandler<RemoveStatuteCommand> {
  execute(
    command: RemoveStatuteCommand,
  ): Promise<Either<HttpException, StatuteModel>>;
}
