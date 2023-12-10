import { NotFoundException } from '@nestjs/common';

export class AboutUsNotFoundException extends NotFoundException {
  constructor() {
    super('aboutUs not found');
  }
}
