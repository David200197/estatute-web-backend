import { EntityCollectionModel } from '@src/common/abstracts/entity-collection.abstracts';
import { AboutUsModel } from './about-us.model';

export interface AllAboutUsModel extends EntityCollectionModel<AboutUsModel> {
  readonly value: AboutUsModel[];
}
