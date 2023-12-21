import { CreateSocialNetworkDto } from '../../dto/create-social-network.dto';

export class CreateSocialNetworkCommand {
  constructor(public readonly createSocialNetworkDto: CreateSocialNetworkDto) {}
}
