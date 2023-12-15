import { IsString, IsUUID, IsUrl } from 'class-validator';

export class CreateSocialNetworksDto {
  @IsUUID()
  readonly uuid: string;
  @IsString()
  readonly name: string;
  @IsUrl()
  readonly link: string;
  @IsUrl()
  readonly icon: string;
}
