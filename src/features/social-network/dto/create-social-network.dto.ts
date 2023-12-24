import { IsString, IsUrl } from 'class-validator';

export class CreateSocialNetworkDto {
  @IsString()
  readonly name: string;
  @IsUrl()
  readonly link: string;
  @IsUrl()
  readonly icon: string;
}
