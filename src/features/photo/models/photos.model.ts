import { EntityCollectionModel } from '@src/common/abstracts/entity-collection.abstracts';
import { PhotoModel } from './photo.model';

export interface PhotosModel extends EntityCollectionModel<PhotoModel> {
  readonly value: PhotoModel[];
}
