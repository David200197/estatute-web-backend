import { IsDateString, IsString } from 'class-validator';

export class CreateAnniversaryDto {
  @IsDateString()
  date: string;
  @IsString()
  description: string;
}
