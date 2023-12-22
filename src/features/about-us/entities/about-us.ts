import { Entity } from '@src/common/abstracts/entity.abstract';
import {
  AboutUsModel,
  AboutUsOptions,
  InvestigativeCategory,
  SpecialtyDegree,
  TeachingCategory,
} from '../models/about-us.model';
import { UuidObjectValue } from '@src/common/object-value/uuid.object-value';
import { NameObjectValue } from './object-value/name.object-value';
import { LastNameObjectValue } from './object-value/last-name.object-value';
import { ScientificCategoryObjectValue } from './object-value/scientific-category.object-value';
import { SpecialtyObjectValue } from './object-value/specialty.object-value';
import { YearsOfWorkExperienceObjectValue } from './object-value/years-of-work-experience.object-value';
import { TeachingExperienceObjectValue } from './object-value/teaching-experience.object-value';
import { TeachingCategoryObjectValue } from './object-value/teaching-category.object-value';
import { InvestigativeCategoryObjectValue } from './object-value/investigative-category.object-value';
import { SpecialtyDegreeObjectValue } from './object-value/specialty-degree.object-value';

export class AboutUs extends Entity implements AboutUsModel {
  public readonly uuid: string;
  public readonly name: string;
  public readonly lastName: string;
  public readonly scientificCategory: string;
  public readonly specialty: string;
  public readonly yearsOfWorkExperience: number;
  public readonly teachingExperience: string;
  public readonly teachingCategory: TeachingCategory;
  public readonly investigativeCategory: InvestigativeCategory;
  public readonly specialtyDegree: SpecialtyDegree;

  constructor(options: AboutUsOptions) {
    super();
    this.uuid = new UuidObjectValue(options.uuid).value;
    this.name = new NameObjectValue(options.name).value;
    this.lastName = new LastNameObjectValue(options.name).value;
    this.scientificCategory = new ScientificCategoryObjectValue(
      options.scientificCategory,
    ).value;
    this.specialty = new SpecialtyObjectValue(options.specialty).value;
    this.yearsOfWorkExperience = new YearsOfWorkExperienceObjectValue(
      options.yearsOfWorkExperience,
    ).value;
    this.teachingExperience = new TeachingExperienceObjectValue(
      options.teachingExperience,
    ).value;
    this.teachingCategory = new TeachingCategoryObjectValue(
      options.teachingCategory,
    ).value;
    this.investigativeCategory = new InvestigativeCategoryObjectValue(
      options.investigativeCategory,
    ).value;
    this.specialtyDegree = new SpecialtyDegreeObjectValue(
      options.specialtyDegree,
    ).value;
  }
}
