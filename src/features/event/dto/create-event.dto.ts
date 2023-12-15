import { IsUUID } from 'class-validator';

export class CreateEventDto {
  @IsUUID()
  readonly uuid: string;
  readonly name: string;
  readonly date: string;
  readonly campus: string;
  readonly sponsors: string;
  readonly rapporteurship: string;
}
