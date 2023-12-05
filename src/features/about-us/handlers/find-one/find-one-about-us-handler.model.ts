import { FindOneAboutUsQuery } from './find-one-about-us.query';

import { AboutUsModel } from '../../models/about-us.model';
import { Maybe } from '@src/common/lib/maybe.lib';
export interface FindOneAboutUsHandlerModel {
  execute(command: FindOneAboutUsQuery): Promise<Maybe<AboutUsModel>>;
}
