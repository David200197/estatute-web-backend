import { UpdateStatuteCommand } from './update-statute.command';

import { StatuteModel } from '../../models/statute.model';
import { Either } from '@src/common/lib/either.lib';
import { HttpException } from '@nestjs/common';
import { ICommandHandler } from '@nestjs/cqrs';

export interface UpdateStatuteHandlerModel
  extends ICommandHandler<UpdateStatuteCommand> {
  execute(
    command: UpdateStatuteCommand,
  ): Promise<Either<HttpException, StatuteModel>>;
}
