import { CreatePhotoDto } from '../../dto/create-photo.dto';

export class CreatePhotoCommand {
  constructor(public readonly createPhotoDto: CreatePhotoDto) {}
}
