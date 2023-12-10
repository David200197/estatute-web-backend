import { CreateAnniversaryCommand } from './create-anniversary.command';

import { AnniversaryModel } from '../../models/anniversary.model';
import { ICommandHandler } from '@nestjs/cqrs';

export interface CreateAnniversaryHandlerModel
  extends ICommandHandler<CreateAnniversaryCommand> {
  execute(command: CreateAnniversaryCommand): Promise<AnniversaryModel>;
}
