import { EntityModel } from '@src/common/abstracts/entity.abstract';
import { NonFunctionProperties } from '@src/common/interfaces/manipulate-properties';

export enum TeachingCategory {
  assistant = 'asistente',
  auxiliary = 'auxiliar',
  headline = 'titular',
}

export enum InvestigativeCategory {
  attache = 'agregado',
  auxiliary = 'auxiliar',
  headline = 'titular',
}

export enum SpecialtyDegree {
  firstDegree = 'primer grado',
  secondDegree = 'segundo grado',
}

export interface AboutUsModel extends EntityModel {
  readonly uuid: string;
  readonly name: string;
  readonly lastName: string;
  readonly scientificCategory: string;
  readonly teachingCategory: TeachingCategory;
  readonly investigativeCategory: InvestigativeCategory;
  readonly specialty: string;
  readonly specialtyDegree: SpecialtyDegree;
  readonly yearsOfWorkExperience: number;
  readonly teachingExperience: string;
}

export type AboutUsProperties = NonFunctionProperties<AboutUsModel>;
