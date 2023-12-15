import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { PhotoModel } from '../../models/photo.model';
import { FindAllDto } from '@src/common/dto/find-all.dto';

export class FindAllPhotoQuery {
  constructor(
    public readonly filter: DeepPartial<PhotoModel>,
    public readonly options: FindAllDto,
  ) {}
}
