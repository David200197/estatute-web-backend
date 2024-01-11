import { IsDateString, IsString } from 'class-validator';

export class CreateAnniversaryDto {
  @IsDateString()
  date: Date;
  @IsString()
  description: string;
}
