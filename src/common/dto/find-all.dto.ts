import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumberString, IsOptional, IsString } from 'class-validator';

enum Order {
  ASC = 'ASC',
  DESC = 'DESC',
}

export class FindAllDto {
  @IsNumberString()
  @IsOptional()
  @ApiProperty({ type: 'string', default: '1' })
  page?: string;

  @IsNumberString()
  @IsOptional()
  @ApiProperty({ type: 'string', default: '10' })
  perPage?: string;

  @IsEnum(Order)
  @IsOptional()
  order?: Order;

  @IsString()
  @IsOptional()
  orderBy?: string;
}
