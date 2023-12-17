import { EntityCollection } from '@src/common/abstracts/entity-collection.abstracts';
import { AboutUsModel } from '../models/about-us.model';
import { AllAboutUsModel } from '../models/all-about-us.model';

export class AllAboutUs
  extends EntityCollection<AboutUsModel>
  implements AllAboutUsModel
{
  constructor(public readonly value: AboutUsModel[]) {
    super(value);
  }
}
