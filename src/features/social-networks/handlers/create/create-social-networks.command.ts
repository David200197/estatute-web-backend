import { CreateSocialNetworksDto } from '../../dto/create-social-networks.dto';

export class CreateSocialNetworksCommand {
  constructor(
    public readonly createSocialNetworksDto: CreateSocialNetworksDto,
  ) {}
}
