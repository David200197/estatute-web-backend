import { IsUUID } from 'class-validator';

export class CreateEventDto {
  @IsUUID()
  readonly uuid: string;
}
