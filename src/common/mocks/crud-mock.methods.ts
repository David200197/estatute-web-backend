import { HelperMockMethods } from '../interfaces/helper-mock.methods';
import { SetOperation } from '../lib/set-operation.lib';

export class CrudMockMethods<T> implements HelperMockMethods<T> {
  private NORMAL_RESPONSE = '__NORMAL_RESPONSE__';
  private store: T[];
  private isError: any;
  private findAllRes: any;
  private findOneRes: any;
  private createRes: any;
  private updateRes: any;
  private updateManyRes: any;
  private deleteManyRes: any;
  private deleteRes: any;

  constructor() {
    this.store = [];
    this.isError = false;
    this.findAllRes = this.NORMAL_RESPONSE;
    this.findOneRes = this.NORMAL_RESPONSE;
    this.createRes = this.NORMAL_RESPONSE;
    this.updateRes = this.NORMAL_RESPONSE;
    this.updateManyRes = this.NORMAL_RESPONSE;
    this.deleteManyRes = this.NORMAL_RESPONSE;
    this.deleteRes = this.NORMAL_RESPONSE;
  }

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
    this.findAllRes = this.NORMAL_RESPONSE;
    this.findOneRes = this.NORMAL_RESPONSE;
    this.createRes = this.NORMAL_RESPONSE;
    this.updateRes = this.NORMAL_RESPONSE;
    this.updateManyRes = this.NORMAL_RESPONSE;
    this.deleteManyRes = this.NORMAL_RESPONSE;
    this.deleteRes = this.NORMAL_RESPONSE;
  }

  __setIsError(value: boolean): void {
    this.isError = value;
  }

  __setFindAllRes(value: any) {
    this.findAllRes = value;
  }

  __setFindOneRes(value: any) {
    this.findOneRes = value;
  }

  __setCreateRes(value: any) {
    this.createRes = value;
  }

  __setUpdateRes(value: any) {
    this.updateRes = value;
  }

  __setUpdateManyRes(value: any) {
    this.updateManyRes = value;
  }

  __setDeleteManyRes(value: any) {
    this.deleteManyRes = value;
  }

  __setDeleteRes(value: any) {
    this.deleteRes = value;
  }

  findAll(find?: Partial<T>): T[] {
    if (this.isError) throw new Error('Base Error');
    if (this.findAllRes !== this.NORMAL_RESPONSE) return this.findAllRes;
    if (!find) return this.store;
    const keys = Object.keys(find);
    if (!keys) return this.store;
    return this.store.filter((data) => {
      return keys.every((key) => {
        find[key] === data[key];
      });
    });
  }

  findOne(find: Partial<T>): T | null {
    if (this.isError) throw new Error('Base Error');
    if (this.findOneRes !== this.NORMAL_RESPONSE) return this.findOneRes;
    const index = this.findOneIndex(find);
    return this.store[index];
  }

  create(dto: T): T {
    if (this.isError) throw new Error('Base Error');
    if (this.createRes !== this.NORMAL_RESPONSE) return this.createRes;
    this.store.push(dto);
    return dto;
  }

  update(find: Partial<T>, dto: Partial<T>): T | null {
    if (this.isError) throw new Error('Base Error');
    if (this.updateRes !== this.NORMAL_RESPONSE) return this.updateRes;
    const index = this.findOneIndex(find);
    if (index === -1) return null;
    const keysDto = Object.keys(dto);
    for (const key of keysDto) {
      if (dto[key] === undefined) continue;
      this.store[index][key] = dto[key];
    }
    return this.store[index];
  }

  updateMany(find: Partial<T>, dto: Partial<T>): boolean {
    if (this.isError) throw new Error('Base Error');
    if (this.updateManyRes !== this.NORMAL_RESPONSE) return this.updateManyRes;
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

  deleteMany(find: Partial<T>): boolean {
    if (this.isError) throw new Error('Base Error');
    if (this.deleteManyRes !== this.NORMAL_RESPONSE) return this.deleteManyRes;
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

  delete(find: Partial<T>): T | null {
    if (this.isError) throw new Error('Base Error');
    if (this.deleteRes !== this.NORMAL_RESPONSE) return this.deleteRes;
    const index = this.findOneIndex(find);
    if (index === -1) return null;
    const data = { ...this.store[index] };
    this.store = this.store.filter((_, idx) => index !== idx);
    return data;
  }

  private findOneIndex(find: Partial<T>): number {
    const keys = Object.keys(find);
    return this.store.findIndex((data) => {
      return keys.every((key) => {
        return find[key] === data[key];
      });
    });
  }
}
