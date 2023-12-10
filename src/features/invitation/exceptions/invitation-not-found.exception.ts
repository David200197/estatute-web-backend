import { NotFoundException } from '@nestjs/common';

export class InvitationNotFoundException extends NotFoundException {
  constructor() {
    super('invitation not found');
  }
}
