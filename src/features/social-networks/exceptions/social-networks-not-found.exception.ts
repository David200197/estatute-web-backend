import { NotFoundException } from '@nestjs/common';

export class SocialNetworksNotFoundException extends NotFoundException {
  constructor() {
    super('socialNetworks not found');
  }
}
