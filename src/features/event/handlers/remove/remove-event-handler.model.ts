import { RemoveEventCommand } from './remove-event.command';

import { EventModel } from '../../models/event.model';
import { Either } from '@src/common/lib/either.lib';
import { HttpException } from '@nestjs/common';
import { ICommandHandler } from '@nestjs/cqrs';

export interface RemoveEventHandlerModel
  extends ICommandHandler<RemoveEventCommand> {
  execute(
    command: RemoveEventCommand,
  ): Promise<Either<HttpException, EventModel>>;
}
