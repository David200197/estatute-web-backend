import { DeepPartial } from '../interfaces/deep-partial';
import { OptionsFlags } from '../interfaces/options-flags';
import { PropsToValueObjects } from '../interfaces/props-to-value-objects';
import { ValueObject } from '../interfaces/value-object';
import { deepClone } from '../utils/deep-clone';
import { isDeeplyEqual } from '../utils/is-deeply-equal';

/**
 * Class representing an Entity.
 * @template T - Properties.
 */
export interface EntityModel<T extends Record<string, unknown>>
  extends ValueObject<PropsToValueObjects<T>> {
  /**
   * Get the properties of the Entity.
   * @returns {string[]} - The array of property names.
   */
  getProperties(): string[];
  /**
   * Get the values of the Entity.
   * @returns {any[]} - The array of property values.
   */
  getValues(): any[];
  /**
   * Get the key-value entries of the Entity.
   * @returns {[string, any][]} - The array of key-value entries.
   */
  getEntries(): [string, any][];
  /**
   * Map the Entity to a new value using a callback function.
   * @param {Function} mutate - The callback function to apply to the Entity.
   * @returns {any} - The mapped value.
   */
  map<T>(mutate: (value: this) => T): T;
  /**
   * Create a shallow clone of the Entity.
   * @returns {Entity} - The cloned Entity.
   */
  clone(): this;
  /**
   * Perform a method on each property of the Entity.
   * @param {Function} method - The method to apply to each property.
   */
  forEachProperty(method: (key: unknown, value: string) => void): void;
  /**
   * Select the properties of the Entity based on a set of options.
   * @param {Partial<OptionsFlags<T>>} options - The options specifying which properties to select.
   * @returns {Record<string, unknown>} - The selected properties.
   */
  select(options: Partial<OptionsFlags<T>>): Record<string, unknown>;
  /**
   * Ignore the properties of the Entity based on a set of options.
   * @param {Partial<OptionsFlags<T>>} options - The options specifying which properties to ignore.
   * @returns {Record<string, unknown>} - The ignored properties.
   */
  ignore(options: Partial<OptionsFlags<T>>): Record<string, unknown>;
  /**
   * Determine if the Entity is equal to another Entity.
   * @param {Entity} entity - The Entity to compare.
   * @returns {boolean} - True if the Entities are equal, false otherwise.
   */
  isEqual(entity: this): boolean;
  /**
   * Determine if the Entity is equal to a DeepPartial of T.
   * @param {DeepPartial<T>} entity - The DeepPartial to compare.
   * @returns {boolean} - True if the Entity is equal to the DeepPartial, false otherwise.
   */
  isSelfEqual(entity: DeepPartial<T>): boolean;
  /**
   * Convert the Entity to an object.
   * @returns {T} - The Entity as an object.
   */
  toObject(): T;
  /**
   * Get the value of a specific property.
   * @param {string} key - The key of the property.
   * @returns {any} - The value of the property.
   */
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
