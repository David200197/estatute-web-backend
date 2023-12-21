import { isString } from 'class-validator';

export class RefreshTokenObjectValue {
  constructor(public readonly value?: string) {
    this.validateType();
  }

  private validateType() {
    if (this.value && !isString(this.value))
      throw new TypeError('refresh token is not string');
  }
}
