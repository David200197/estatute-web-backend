import { HelperMockMethods } from '../interfaces/helper-mock.methods';
import { NonFunctionProperties } from '../interfaces/manipulate-properties';
import { SetOperation } from '../lib/set-operation.lib';

export class CrudMockMethods<T> implements HelperMockMethods<T> {
  private store: T[] = [];
  private isError = false;

  __getStore(): T[] {
    return this.store;
  }
  __isError(): boolean {
    return this.isError;
  }

  __changeStore(store: T[]): void {
    this.store = store;
  }

  __reset(): void {
    this.store = [];
    this.isError = false;
  }

  __setIsError(value: boolean): void {
    this.isError = value;
  }

  findAll(find?: Partial<T>) {
    if (this.isError) throw new Error('Base Error');
    if (!find) return this.store;
    const keys = Object.keys(find);
    if (!keys) return this.store;
    return this.store.filter((data) => {
      return keys.every((key) => find[key] === data[key]);
    });
  }

  findOne(find: Partial<NonFunctionProperties<T>>): T | null {
    if (this.isError) throw new Error('Base Error');
    const index = this.findOneIndex(find);
    return this.store[index];
  }

  create(dto: T): T {
    if (this.isError) throw new Error('Base Error');
    this.store.push(dto);
    return dto;
  }

  update(find: Partial<NonFunctionProperties<T>>, dto: Partial<T>): T | null {
    if (this.isError) throw new Error('Base Error');
    const index = this.findOneIndex(find);
    if (index === -1) return null;
    const keysDto = Object.keys(dto);
    for (const key of keysDto) this.store[index][key] = dto[key];
    return this.store[index];
  }

  updateMany(
    find: Partial<NonFunctionProperties<T>>,
    dto: Partial<T>,
  ): boolean {
    if (this.isError) throw new Error('Base Error');
    this.store = this.store.map(({ ...data }) => {
      const findKeys = Object.keys(find);
      const dataKeys = Object.keys(data);
      const operation = new SetOperation({
        firstArray: findKeys,
        secondArray: dataKeys,
      });
      if (!operation.hasDifference()) return data;
      for (const key in dto) data[key] = dto[key];
      return data;
    });
    return true;
  }

  deleteMany(find: Partial<NonFunctionProperties<T>>): boolean {
    if (this.isError) throw new Error('Base Error');
    this.store = this.store.filter(({ ...data }) => {
      const findKeys = Object.keys(find);
      const dataKeys = Object.keys(data);
      const operation = new SetOperation({
        firstArray: findKeys,
        secondArray: dataKeys,
      });
      return !operation.hasDifference();
    });
    return true;
  }

  delete(find: Partial<NonFunctionProperties<T>>): T | null {
    if (this.isError) throw new Error('Base Error');
    const index = this.findOneIndex(find);
    if (index === -1) return null;
    const data = { ...this.store[index] };
    this.store = this.store.filter((_, idx) => index !== idx);
    return data;
  }

  private findOneIndex(find: Partial<NonFunctionProperties<T>>): number {
    const keys = Object.keys(find);
    return this.store.findIndex((data) => {
      return keys.every((key) => find[key] === data[key]);
    });
  }
}
