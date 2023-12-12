import { IsUUID } from 'class-validator';

export class CreateAboutUsDto {
  @IsUUID()
  readonly uuid: string;
}
