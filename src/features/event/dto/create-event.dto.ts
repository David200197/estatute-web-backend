import { IsDateString, IsString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  readonly name: string;
  @IsDateString()
  readonly date: string;
  @IsString()
  readonly campus: string;
  @IsString()
  readonly sponsors: string;
  @IsString()
  readonly rapporteurship: string;
}
