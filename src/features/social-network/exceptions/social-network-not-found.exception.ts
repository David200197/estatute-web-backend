import { NotFoundException } from '@nestjs/common';

export class SocialNetworkNotFoundException extends NotFoundException {
  constructor() {
    super('socialNetwork not found');
  }
}
