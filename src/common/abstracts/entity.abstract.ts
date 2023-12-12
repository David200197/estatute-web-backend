import { deepClone } from '../utils/deep-clone';

export interface EntityModel {
  getProperties(): string[];
  getValues(): any[];
  getEntries(): [string, any][];
  map<T>(mutate: (value: this) => T): T;
  clone(): this;
  forEachProperty(method: (key: unknown, value: string) => void): void;
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
}
