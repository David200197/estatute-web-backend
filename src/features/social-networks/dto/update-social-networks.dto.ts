import { PartialType } from '@nestjs/swagger';
import { CreateSocialNetworksDto } from './create-social-networks.dto';

export class UpdateSocialNetworksDto extends PartialType(
  CreateSocialNetworksDto,
) {}
