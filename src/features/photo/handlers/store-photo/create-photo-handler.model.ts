import { StorePhotoCommand } from './create-photo.command';
import { ICommandHandler } from '@nestjs/cqrs';

export type Urls = string[];

export interface CreatePhotoHandlerModel
  extends ICommandHandler<StorePhotoCommand> {
  execute(command: StorePhotoCommand): Promise<Urls>;
}
