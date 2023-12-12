import { Entity } from '@src/common/abstracts/entity.abstract';
import { AboutUsModel, AboutUsProperties } from '../models/about-us.model';

export class AboutUs extends Entity implements AboutUsModel {
  readonly uuid: string;
  constructor(options: AboutUsProperties) {
    super();
    Object.assign(this, options);
  }
}
