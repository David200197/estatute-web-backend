import { Entity } from '@src/common/abstracts/entity.abstract';
import { PhotoModel, PhotoProperties } from '../models/photo.model';

export class Photo extends Entity implements PhotoModel {
  readonly uuid: string;
  constructor(options: PhotoProperties) {
    super();
    Object.assign(this, options);
  }
}
