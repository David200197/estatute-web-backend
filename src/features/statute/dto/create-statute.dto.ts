import { IsUUID } from 'class-validator';

export class CreateStatuteDto {
  @IsUUID()
  readonly uuid: string;
}
