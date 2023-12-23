import { Entity, Property, PrimaryKey } from '@mikro-orm/core';
import {
  AboutUsProps,
  InvestigativeCategoryEnum,
  SpecialtyDegreeEnum,
  TeachingCategoryEnum,
} from '../models/about-us.model';

@Entity({
  tableName: 'AboutUs',
})
export class AboutUsMikroEntity implements AboutUsProps {
  @PrimaryKey()
  uuid: string;
  @Property()
  name: string;
  @Property()
  lastName: string;
  @Property()
  scientificCategory: string;
  @Property()
  specialty: string;
  @Property()
  yearsOfWorkExperience: number;
  @Property()
  teachingExperience: string;
  @Property({ type: 'string' })
  teachingCategory: TeachingCategoryEnum;
  @Property({ type: 'string' })
  investigativeCategory: InvestigativeCategoryEnum;
  @Property({ type: 'string' })
  specialtyDegree: SpecialtyDegreeEnum;
}
