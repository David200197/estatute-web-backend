import { Entities } from '@src/common/abstracts/entities.abstracts';
import { AboutUsModel, AboutUsProps } from '../models/about-us.model';
import { AllAboutUsModel } from '../models/all-about-us.model';
import { AboutUs } from './about-us';
import { SelfPartial } from '@src/common/interfaces/self-partial';

export class AllAboutUs
  extends Entities<AboutUsModel>
  implements AllAboutUsModel
{
  private constructor(public readonly value: AboutUsModel[]) {
    super(value);
  }

  static create(value: SelfPartial<AboutUsProps, 'uuid'>[]) {
    if (!Array.isArray(value))
      throw new TypeError('AboutUsModel is not a array');
    return new AllAboutUs(value.map((data) => AboutUs.create(data)));
  }
}
