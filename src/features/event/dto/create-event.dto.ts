import { IsDateString, IsString, IsUUID } from 'class-validator';

export class CreateEventDto {
  @IsUUID()
  readonly uuid: string;
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
