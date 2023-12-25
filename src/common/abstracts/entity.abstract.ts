import { DeepPartial } from '../interfaces/deep-partial';
import { OptionsFlags } from '../interfaces/options-flags';
import { PropsToValueObjects } from '../interfaces/props-to-value-objects';
import { ValueObject } from '../interfaces/value-object';
import { deepClone } from '../utils/deep-clone';
import { isDeeplyEqual } from '../utils/is-deeply-equal';

export interface EntityModel<T extends Record<string, unknown>>
  extends ValueObject<PropsToValueObjects<T>> {
  getProperties(): string[];
  getValues(): any[];
  getEntries(): [string, any][];
  map<T>(mutate: (value: this) => T): T;
  clone(): this;
  forEachProperty(method: (key: unknown, value: string) => void): void;
  select(options: Partial<OptionsFlags<T>>): Record<string, unknown>;
  ignore(options: Partial<OptionsFlags<T>>): Record<string, unknown>;
  isEqual(entity: this): boolean;
  isSelfEqual(entity: DeepPartial<T>): boolean;
  toObject(): T;
  get<P extends keyof T>(key: P): T[P];
}

export class Entity<T extends Record<string, unknown>>
  implements EntityModel<T>
{
  protected constructor(public readonly value: PropsToValueObjects<T>) {}

  getProperties(): string[] {
    return Object.keys(this.toObject());
  }

  getValues(): any[] {
    return Object.values(this.toObject());
  }

  getEntries(): [string, any][] {
    return Object.entries(this.toObject());
  }

  map<T>(mutate: (value: this) => T): T {
    return mutate(this.clone());
  }

  clone(): this {
    return deepClone(this);
  }

  forEachProperty(method: (key: unknown, value: string) => void) {
    const entry = this.getEntries();
    for (const [key, value] of entry) method(key, value);
  }

  select(options: Partial<OptionsFlags<T>>): Record<string, unknown> {
    const res: Record<string, unknown> = {};
    const object = this.toObject();
    for (const key in options) {
      if (!options[key]) continue;
      res[key] = object[key];
    }
    return res;
  }

  ignore(options: Partial<OptionsFlags<T>>): Record<string, unknown> {
    const res: Record<string, unknown> = {};
    const object = this.toObject();
    for (const key in options) {
      if (options[key] !== false) continue;
      res[key] = object[key];
    }
    return res;
  }

  isEqual(entity: this): boolean {
    return isDeeplyEqual(this.toObject(), entity.toObject());
  }

  isSelfEqual(entity: DeepPartial<T>): boolean {
    const keys = Object.keys(entity);
    const selects = keys.reduce(
      (prev, currentKey) => ({ ...prev, [currentKey]: true }),
      {},
    );
    const selected = this.select(selects);
    return isDeeplyEqual(selected, entity);
  }

  toObject(): T {
    const response: Record<string, unknown> = {};
    for (const key in this.value) {
      response[key] = this.value[key].value;
    }
    return response as T;
  }

  get<P extends keyof T>(key: P): T[P] {
    return this.value[key].value;
  }
}
