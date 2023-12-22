import { Entity } from '@src/common/abstracts/entity.abstract';
import {
  AboutUsModel,
  AboutUsOptions,
  InvestigativeCategory,
  SpecialtyDegree,
  TeachingCategory,
} from '../models/about-us.model';
import { UuidValueObject } from '@src/common/value-object/uuid.value-object';
import { NameValueObject } from './value-object/name.value-object';
import { LastNameValueObject } from './value-object/last-name.value-object';
import { ScientificCategoryValueObject } from './value-object/scientific-category.value-object';
import { SpecialtyValueObject } from './value-object/specialty.value-object';
import { YearsOfWorkExperienceValueObject } from './value-object/years-of-work-experience.value-object';
import { TeachingExperienceValueObject } from './value-object/teaching-experience.value-object';
import { TeachingCategoryValueObject } from './value-object/teaching-category.value-object';
import { InvestigativeCategoryValueObject } from './value-object/investigative-category.value-object';
import { SpecialtyDegreeValueObject } from './value-object/specialty-degree.value-object';

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
    this.uuid = new UuidValueObject(options.uuid).value;
    this.name = new NameValueObject(options.name).value;
    this.lastName = new LastNameValueObject(options.lastName).value;
    this.scientificCategory = new ScientificCategoryValueObject(
      options.scientificCategory,
    ).value;
    this.specialty = new SpecialtyValueObject(options.specialty).value;
    this.yearsOfWorkExperience = new YearsOfWorkExperienceValueObject(
      options.yearsOfWorkExperience,
    ).value;
    this.teachingExperience = new TeachingExperienceValueObject(
      options.teachingExperience,
    ).value;
    this.teachingCategory = new TeachingCategoryValueObject(
      options.teachingCategory,
    ).value;
    this.investigativeCategory = new InvestigativeCategoryValueObject(
      options.investigativeCategory,
    ).value;
    this.specialtyDegree = new SpecialtyDegreeValueObject(
      options.specialtyDegree,
    ).value;
  }
}
