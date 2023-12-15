import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { UpdatePhotoDto } from '../../dto/update-photo.dto';
import { PhotoModel } from '../../models/photo.model';

export class UpdatePhotoCommand {
  constructor(
    public readonly filter: DeepPartial<PhotoModel>,
    public readonly updatePhotoDto: UpdatePhotoDto,
  ) {}
}
