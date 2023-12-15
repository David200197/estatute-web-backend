import { IsUUID } from 'class-validator';

export class CreatePhotoDto {
  @IsUUID()
  readonly uuid: string;
}
