import { NotFoundException } from '@nestjs/common';

export class StatuteNotFoundException extends NotFoundException {
  constructor() {
    super('statute not found');
  }
}
