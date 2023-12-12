import { IsUUID } from 'class-validator';

export class CreateSocialNetworksDto {
  @IsUUID()
  readonly uuid: string;
}
