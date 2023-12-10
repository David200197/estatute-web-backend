import { CreateStatuteCommand } from './create-statute.command';

import { StatuteModel } from '../../models/statute.model';
import { ICommandHandler } from '@nestjs/cqrs';

export interface CreateStatuteHandlerModel
  extends ICommandHandler<CreateStatuteCommand> {
  execute(command: CreateStatuteCommand): Promise<StatuteModel>;
}
