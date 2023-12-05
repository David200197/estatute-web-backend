import { AboutUsModel } from '../models/about-us.model';
import { AboutUssModel } from '../models/about-uss.model';

export class AboutUss implements AboutUssModel {
  constructor(public readonly value: AboutUsModel[]) {}
}
