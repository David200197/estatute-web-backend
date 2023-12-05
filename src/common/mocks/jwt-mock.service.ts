export class JwtMockService {
  private isError = false;

  __setIsError(value: boolean) {
    this.isError = value;
  }

  sign() {
    if (this.isError) throw new Error('Base Error');
    return '!!!.!!!.!!!';
  }
}
