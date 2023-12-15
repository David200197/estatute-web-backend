import { Entity } from '@src/common/abstracts/entity.abstract';
import {
  AboutUsModel,
  AboutUsProperties,
  InvestigativeCategory,
  SpecialtyDegree,
  TeachingCategory,
} from '../models/about-us.model';

export class AboutUs extends Entity implements AboutUsModel {
  readonly uuid: string;
  readonly name: string;
  readonly lastName: string;
  readonly scientificCategory: string;
  readonly specialty: string;
  readonly yearsOfWorkExperience: number;
  readonly teachingExperience: string;
  readonly teachingCategory: TeachingCategory;
  readonly investigativeCategory: InvestigativeCategory;
  readonly specialtyDegree: SpecialtyDegree;
  constructor(options: AboutUsProperties) {
    super();
    Object.assign(this, options);
  }
}
