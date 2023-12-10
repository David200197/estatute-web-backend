import { NotFoundException } from '@nestjs/common';

export class AnniversaryNotFoundException extends NotFoundException {
  constructor() {
    super('anniversary not found');
  }
}
