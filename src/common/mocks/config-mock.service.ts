export class ConfigMockService {
  private isError = false;

  __setIsError(value: boolean) {
    this.isError = value;
  }

  get() {
    if (this.isError) throw new Error('Base Error');
    return '!!!';
  }
}
