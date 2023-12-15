import { EntityCollection } from '@src/common/abstracts/entity-collection.abstracts';
import { PhotoModel } from '../models/photo.model';
import { PhotosModel } from '../models/photos.model';

export class Photos
  extends EntityCollection<PhotoModel>
  implements PhotosModel
{
  constructor(public readonly value: PhotoModel[]) {
    super(value);
  }
}
