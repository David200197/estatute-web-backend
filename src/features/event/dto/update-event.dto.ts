import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDateString, IsOptional, IsString } from 'class-validator';

const TransformToSerializerString = () =>
  Transform(({ value }) => (Boolean(value) ? value : undefined));

export class UpdateEventDto {
  @TransformToSerializerString()
  @IsString()
  @IsOptional()
  readonly name?: string;

  @TransformToSerializerString()
  @IsDateString()
  @IsOptional()
  readonly date?: string;

  @TransformToSerializerString()
  @IsString()
  @IsOptional()
  readonly campus?: string;

  @TransformToSerializerString()
  @IsString()
  @IsOptional()
  readonly sponsors?: string;

  @TransformToSerializerString()
  @IsString()
  @IsOptional()
  readonly rapporteurship?: string;

  @TransformToSerializerString()
  @ApiProperty({
    type: [String],
    format: 'binary',
  })
  @IsOptional()
  readonly photos?: string[];
}
