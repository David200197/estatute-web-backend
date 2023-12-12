import { IsUUID } from 'class-validator';

export class CreateAnniversaryDto {
  @IsUUID()
  readonly uuid: string;
}
