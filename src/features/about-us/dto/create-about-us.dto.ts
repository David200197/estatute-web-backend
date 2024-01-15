import { IsEnum, IsInt, IsString } from 'class-validator';
import {
  InvestigativeCategoryEnum,
  SpecialtyDegreeEnum,
  TeachingCategoryEnum,
} from '../models/about-us.model';

export class CreateAboutUsDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly lastName: string;
  @IsString()
  readonly scientificCategory: string;
  @IsEnum(TeachingCategoryEnum)
  readonly teachingCategory: TeachingCategoryEnum;
  @IsEnum(InvestigativeCategoryEnum)
  readonly investigativeCategory: InvestigativeCategoryEnum;
  @IsString()
  readonly specialty: string;
  @IsEnum(SpecialtyDegreeEnum)
  readonly specialtyDegree: SpecialtyDegreeEnum;
  @IsInt()
  readonly yearsOfWorkExperience: number;
  @IsString()
  readonly teachingExperience: string;
}
