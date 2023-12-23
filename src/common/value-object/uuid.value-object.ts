import { isUUID } from 'class-validator';
import { randomUUID } from 'crypto';
import { ValueObject } from '../interfaces/value-object';

export class Uuid implements ValueObject<string> {
  private constructor(public readonly value: string) {}

  public static checkIsUuid(value: string): void {
    if (!isUUID(value)) throw new TypeError('username is not string');
  }

  public static create(value: string = randomUUID()): Uuid {
    this.checkIsUuid(value);
    return new Uuid(value);
  }
}
