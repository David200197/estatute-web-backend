import { ForbiddenException } from '@nestjs/common';

export class AuthForbiddenException extends ForbiddenException {
  constructor() {
    super('access denied');
  }
}
