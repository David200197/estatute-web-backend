import { EntityCollection } from '@src/common/abstracts/entity-collection.abstracts';
import { AboutUsModel } from '../models/about-us.model';
import { AllAboutUsModel } from '../models/all-about-us.model';
import { AboutUs } from './about-us';

export class AllAboutUs
  extends EntityCollection<AboutUsModel>
  implements AllAboutUsModel
{
  private constructor(public readonly value: AboutUsModel[]) {
    super(value);
  }

  static instance(value: AboutUsModel[]) {
    if (!Array.isArray(value))
      throw new TypeError('AboutUsModel is not a array');
    return new AllAboutUs(value.map((data) => new AboutUs(data)));
  }
}
