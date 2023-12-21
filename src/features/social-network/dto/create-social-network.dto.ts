import { IsString, IsUUID, IsUrl } from 'class-validator';

export class CreateSocialNetworkDto {
  @IsUUID()
  readonly uuid: string;
  @IsString()
  readonly name: string;
  @IsUrl()
  readonly link: string;
  @IsUrl()
  readonly icon: string;
}
