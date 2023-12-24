import { ConflictException } from '@nestjs/common';

export class AdminLoggedConflictException extends ConflictException {
  constructor() {
    super('The logged in administrator cannot be affected by this action');
  }
}
