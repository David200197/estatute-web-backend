import { Entity, Property, PrimaryKey } from '@mikro-orm/core';
import {
  AboutUsProperties,
  InvestigativeCategory,
  SpecialtyDegree,
  TeachingCategory,
} from '../models/about-us.model';

@Entity({
  tableName: 'about-us',
})
export class AboutUsMikroEntity implements AboutUsProperties {
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
  teachingCategory: TeachingCategory;
  @Property({ type: 'string' })
  investigativeCategory: InvestigativeCategory;
  @Property({ type: 'string' })
  specialtyDegree: SpecialtyDegree;
}
