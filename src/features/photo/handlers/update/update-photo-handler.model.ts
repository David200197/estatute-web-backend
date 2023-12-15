import { UpdatePhotoCommand } from './update-photo.command';

import { PhotoModel } from '../../models/photo.model';
import { Either } from '@src/common/lib/either.lib';
import { HttpException } from '@nestjs/common';
import { ICommandHandler } from '@nestjs/cqrs';

export interface UpdatePhotoHandlerModel
  extends ICommandHandler<UpdatePhotoCommand> {
  execute(
    command: UpdatePhotoCommand,
  ): Promise<Either<HttpException, PhotoModel>>;
}
