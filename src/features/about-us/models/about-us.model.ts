import { EntityModel } from '@src/common/abstracts/entity.abstract';
import { NonFunctionProperties } from '@src/common/interfaces/manipulate-properties';

export interface AboutUsModel extends EntityModel {
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
}

export type AboutUsProperties = NonFunctionProperties<AboutUsModel>;
