import { isDate } from 'class-validator';

export class DateValue {
  private constructor(public readonly value: Date) {}

  public static validateIsDate(value: Date): void {
    if (!isDate(value)) throw new TypeError('date is not a Date type');
  }

  public static create(value: Date): DateValue {
    this.validateIsDate(value);
    return new DateValue(value);
  }
}
