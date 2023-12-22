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
  private readonly _uuid: UuidObjectValue;
  private _name: NameObjectValue;
  private _lastName: LastNameObjectValue;
  private _scientificCategory: ScientificCategoryObjectValue;
  private _specialty: SpecialtyObjectValue;
  private _yearsOfWorkExperience: YearsOfWorkExperienceObjectValue;
  private _teachingExperience: TeachingExperienceObjectValue;
  private _teachingCategory: TeachingCategoryObjectValue;
  private _investigativeCategory: InvestigativeCategoryObjectValue;
  private _specialtyDegree: SpecialtyDegreeObjectValue;

  constructor(options: AboutUsOptions) {
    super();
    this._uuid = new UuidObjectValue(options.uuid);
    this._name = new NameObjectValue(options.name);
    this._lastName = new LastNameObjectValue(options.name);
    this._scientificCategory = new ScientificCategoryObjectValue(
      options.scientificCategory,
    );
    this._specialty = new SpecialtyObjectValue(options.specialty);
    this._yearsOfWorkExperience = new YearsOfWorkExperienceObjectValue(
      options.yearsOfWorkExperience,
    );
    this._teachingExperience = new TeachingExperienceObjectValue(
      options.teachingExperience,
    );
    this._teachingCategory = new TeachingCategoryObjectValue(
      options.teachingCategory,
    );
    this._investigativeCategory = new InvestigativeCategoryObjectValue(
      options.investigativeCategory,
    );
    this._specialtyDegree = new SpecialtyDegreeObjectValue(
      options.specialtyDegree,
    );
  }

  get uuid() {
    return this._uuid.value;
  }

  get name() {
    return this._name.value;
  }

  set name(value: string) {
    this._name = new NameObjectValue(value);
  }

  get lastName() {
    return this._lastName.value;
  }

  set lastName(value: string) {
    this._lastName = new LastNameObjectValue(value);
  }

  get scientificCategory() {
    return this._scientificCategory.value;
  }

  set scientificCategory(value: string) {
    this._scientificCategory = new ScientificCategoryObjectValue(value);
  }

  get specialty() {
    return this._specialty.value;
  }

  set specialty(value: string) {
    this._specialty = new SpecialtyObjectValue(value);
  }

  get yearsOfWorkExperience() {
    return this._yearsOfWorkExperience.value;
  }

  set yearsOfWorkExperience(value: number) {
    this._yearsOfWorkExperience = new YearsOfWorkExperienceObjectValue(value);
  }

  get teachingExperience() {
    return this._teachingExperience.value;
  }

  set teachingExperience(value: string) {
    this._teachingExperience = new TeachingExperienceObjectValue(value);
  }

  get teachingCategory() {
    return this._teachingCategory.value;
  }

  set teachingCategory(value: TeachingCategory) {
    this._teachingCategory = new TeachingCategoryObjectValue(value);
  }

  get investigativeCategory() {
    return this._investigativeCategory.value;
  }

  set investigativeCategory(value: InvestigativeCategory) {
    this._investigativeCategory = new InvestigativeCategoryObjectValue(value);
  }

  get specialtyDegree() {
    return this._specialtyDegree.value;
  }

  set specialtyDegree(value: SpecialtyDegree) {
    this._specialtyDegree = new SpecialtyDegreeObjectValue(value);
  }
}
