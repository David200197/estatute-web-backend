import { UpdateEventCommand } from './update-event.command';

import { EventModel } from '../../models/event.model';
import { Either } from '@src/common/lib/either.lib';
import { HttpException } from '@nestjs/common';
import { ICommandHandler } from '@nestjs/cqrs';

export interface UpdateEventHandlerModel
  extends ICommandHandler<UpdateEventCommand> {
  execute(
    command: UpdateEventCommand,
  ): Promise<Either<HttpException, EventModel>>;
}
