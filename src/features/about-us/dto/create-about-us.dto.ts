import { IsUUID } from 'class-validator';

export class CreateAboutUsDto {
  @IsUUID()
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
