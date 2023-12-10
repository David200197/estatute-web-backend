import { UpdateAboutUsCommand } from './update-about-us.command';

import { AboutUsModel } from '../../models/about-us.model';
import { Either } from '@src/common/lib/either.lib';
import { HttpException } from '@nestjs/common';
import { ICommandHandler } from '@nestjs/cqrs';

export interface UpdateAboutUsHandlerModel
  extends ICommandHandler<UpdateAboutUsCommand> {
  execute(
    command: UpdateAboutUsCommand,
  ): Promise<Either<HttpException, AboutUsModel>>;
}
