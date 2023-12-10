import { CreateAboutUsCommand } from './create-about-us.command';

import { AboutUsModel } from '../../models/about-us.model';
import { ICommandHandler } from '@nestjs/cqrs';

export interface CreateAboutUsHandlerModel
  extends ICommandHandler<CreateAboutUsCommand> {
  execute(command: CreateAboutUsCommand): Promise<AboutUsModel>;
}
