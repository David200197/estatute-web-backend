import { Entity } from '@src/common/abstracts/entity.abstract';
import { AboutUsModel, AboutUsProperties } from '../models/about-us.model';
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
  private readonly _name: NameObjectValue;
  private readonly _lastName: LastNameObjectValue;
  private readonly _scientificCategory: ScientificCategoryObjectValue;
  private readonly _specialty: SpecialtyObjectValue;
  private readonly _yearsOfWorkExperience: YearsOfWorkExperienceObjectValue;
  private readonly _teachingExperience: TeachingExperienceObjectValue;
  private readonly _teachingCategory: TeachingCategoryObjectValue;
  private readonly _investigativeCategory: InvestigativeCategoryObjectValue;
  private readonly _specialtyDegree: SpecialtyDegreeObjectValue;

  constructor(options: AboutUsProperties) {
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

  get lastName() {
    return this._lastName.value;
  }

  get scientificCategory() {
    return this._scientificCategory.value;
  }

  get specialty() {
    return this._specialty.value;
  }

  get yearsOfWorkExperience() {
    return this._yearsOfWorkExperience.value;
  }

  get teachingExperience() {
    return this._teachingExperience.value;
  }

  get teachingCategory() {
    return this._teachingCategory.value;
  }

  get investigativeCategory() {
    return this._investigativeCategory.value;
  }

  get specialtyDegree() {
    return this._specialtyDegree.value;
  }
}
