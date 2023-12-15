import { RemovePhotoCommand } from './remove-photo.command';

import { PhotoModel } from '../../models/photo.model';
import { Either } from '@src/common/lib/either.lib';
import { HttpException } from '@nestjs/common';
import { ICommandHandler } from '@nestjs/cqrs';

export interface RemovePhotoHandlerModel
  extends ICommandHandler<RemovePhotoCommand> {
  execute(
    command: RemovePhotoCommand,
  ): Promise<Either<HttpException, PhotoModel>>;
}
