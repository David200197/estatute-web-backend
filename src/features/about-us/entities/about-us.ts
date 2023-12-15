import { Entity } from '@src/common/abstracts/entity.abstract';
import { AboutUsModel, AboutUsProperties } from '../models/about-us.model';

export class AboutUs extends Entity implements AboutUsModel {
  readonly uuid: string;
  readonly name: string;
  readonly lastName: string;
  readonly scientificCategory: string;
  readonly teachingCategory: string;
  readonly investigativeCategory: string;
  readonly specialty: string;
  readonly specialtyDegree: string;
  readonly yearsOfWorkExperience: number;
  readonly teachingExperience: string;
  constructor(options: AboutUsProperties) {
    super();
    Object.assign(this, options);
  }
}
