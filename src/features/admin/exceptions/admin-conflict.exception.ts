import { ConflictException } from '@nestjs/common';

export class AdminConflictException extends ConflictException {
  constructor() {
    super('admin is exists');
  }
}
