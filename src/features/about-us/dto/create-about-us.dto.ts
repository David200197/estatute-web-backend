import { IsEnum, IsInt, IsString, IsUUID } from 'class-validator';
import {
  InvestigativeCategory,
  SpecialtyDegree,
  TeachingCategory,
} from '../models/about-us.model';

export class CreateAboutUsDto {
  @IsUUID()
  readonly uuid: string;
  @IsString()
  readonly name: string;
  @IsString()
  readonly lastName: string;
  @IsString()
  readonly scientificCategory: string;
  @IsEnum(TeachingCategory)
  readonly teachingCategory: TeachingCategory;
  @IsEnum(InvestigativeCategory)
  readonly investigativeCategory: InvestigativeCategory;
  @IsString()
  readonly specialty: string;
  @IsEnum(SpecialtyDegree)
  readonly specialtyDegree: SpecialtyDegree;
  @IsInt()
  readonly yearsOfWorkExperience: number;
  @IsString()
  readonly teachingExperience: string;
}
