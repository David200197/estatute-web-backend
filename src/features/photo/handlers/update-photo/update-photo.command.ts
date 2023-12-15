import { UpdatePhotoDto } from '../../dto/update-photo.dto';

export class UpdatePhotoCommand {
  constructor(public readonly updatePhotoDto: UpdatePhotoDto) {}
}
