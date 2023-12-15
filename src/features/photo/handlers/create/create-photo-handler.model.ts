import { CreatePhotoCommand } from './create-photo.command';

import { PhotoModel } from '../../models/photo.model';
import { ICommandHandler } from '@nestjs/cqrs';

export interface CreatePhotoHandlerModel
  extends ICommandHandler<CreatePhotoCommand> {
  execute(command: CreatePhotoCommand): Promise<PhotoModel>;
}
