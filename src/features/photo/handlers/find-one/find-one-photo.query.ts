import { DeepPartial } from '@src/common/interfaces/deep-partial';
import { PhotoModel } from '../../models/photo.model';

export class FindOnePhotoQuery {
  constructor(public readonly filter: DeepPartial<PhotoModel>) {}
}
