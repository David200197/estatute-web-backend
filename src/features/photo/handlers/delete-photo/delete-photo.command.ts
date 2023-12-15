import { DeletePhotoDto } from '../../dto/delete-photo.dto';

export class DeletePhotoCommand {
  constructor(public readonly deletePhotoDto: DeletePhotoDto) {}
}
