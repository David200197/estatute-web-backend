import { Entity } from '@src/common/abstracts/entity.abstract';
import { AboutUsModel, AboutUsProperties } from '../models/about-us.model';

export class AboutUs extends Entity<AboutUsModel> implements AboutUsModel {
  constructor(options: AboutUsProperties) {
    super(options);
    Object.assign(this, options);
  }
}
