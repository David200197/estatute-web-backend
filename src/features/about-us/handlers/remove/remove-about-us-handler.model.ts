import { RemoveAboutUsCommand } from './remove-about-us.command';

import { AboutUsModel } from '../../models/about-us.model';
import { Either } from '@src/common/lib/either.lib';
import { HttpException } from '@nestjs/common';
import { ICommandHandler } from '@nestjs/cqrs';

export interface RemoveAboutUsHandlerModel
  extends ICommandHandler<RemoveAboutUsCommand> {
  execute(
    command: RemoveAboutUsCommand,
  ): Promise<Either<HttpException, AboutUsModel>>;
}
