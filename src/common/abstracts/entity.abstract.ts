import { NonFunctionProperties } from '../interfaces/manipulate-properties';
import { OptionsFlags } from '../interfaces/options-flags';
import { deepClone } from '../utils/deep-clone';
import { isDeeplyEqual } from '../utils/is-deeply-equal';

export interface EntityModel {
  getProperties(): string[];
  getValues(): any[];
  getEntries(): [string, any][];
  map<T>(mutate: (value: this) => T): T;
  clone(): this;
  forEachProperty(method: (key: unknown, value: string) => void): void;
  select(
    options: Partial<OptionsFlags<NonFunctionProperties<this>>>,
  ): Record<string, unknown>;
  isEqual(entity: this): boolean;
}

export class Entity implements EntityModel {
  protected constructor() {
    //
  }

  getProperties(): string[] {
    return Object.keys(this);
  }

  getValues(): any[] {
    return Object.values(this);
  }

  getEntries(): [string, any][] {
    return Object.entries(this);
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

  select(
    options: Partial<OptionsFlags<NonFunctionProperties<this>>>,
  ): Record<string, unknown> {
    const res: Record<string, unknown> = {};
    for (const key in options) {
      if (!options[key]) continue;
      res[key] = this[key];
    }
    return res;
  }

  isEqual(entity: this): boolean {
    return isDeeplyEqual(this, entity);
  }
}
