import { isUUID } from 'class-validator';
import { randomUUID } from 'crypto';

export class UuidObjectValue {
  constructor(public readonly value: string = randomUUID()) {
    this.validateType();
  }

  private validateType() {
    if (!isUUID(this.value)) throw new TypeError('uuid is not uuid');
  }
}
