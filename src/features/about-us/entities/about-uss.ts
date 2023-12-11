import { EntityCollection } from '@src/common/abstracts/entity-collection.abstracts';
import { AboutUsModel } from '../models/about-us.model';
import { AboutUssModel } from '../models/about-uss.model';

export class AboutUss
  extends EntityCollection<AboutUsModel>
  implements AboutUssModel
{
  constructor(public readonly value: AboutUsModel[]) {
    super(value);
  }
}
