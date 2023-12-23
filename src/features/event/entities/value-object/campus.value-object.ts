import { isString } from 'class-validator';

export class Campus {
  private constructor(public readonly value: string) {}

  public static checkIsCampus(value: string): void {
    if (!isString(value)) throw new TypeError('campus is not string');
  }

  public static create(value: string): Campus {
    this.checkIsCampus(value);
    return new Campus(value);
  }
}
