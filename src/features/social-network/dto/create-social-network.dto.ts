import { IsIn, IsUrl } from 'class-validator';
import { TypeSocialNetwork } from '../entities/value-object/type-social-network.value-object';
import { TypeSocialNetworkEnum } from '../models/social-network.model';

export class CreateSocialNetworkDto {
  @IsUrl()
  readonly link: string;
  @IsIn(TypeSocialNetwork.getAll())
  readonly type: TypeSocialNetworkEnum;
}
