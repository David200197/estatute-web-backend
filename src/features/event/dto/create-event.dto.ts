import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    type: [String],
    format: 'binary',
  })
  readonly photos: string[];
}
