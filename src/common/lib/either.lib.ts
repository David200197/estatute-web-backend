type Left<L> = { kind: 'left'; leftValue: L };
type Right<R> = { kind: 'right'; rightValue: R };

type EitherValue<L, R> = Left<L> | Right<R>;

export class Either<L, R> {
  private constructor(private readonly value: EitherValue<L, R>) {}

  isLeft(): boolean {
    return this.value.kind === 'left';
  }
  isRight(): boolean {
    return this.value.kind === 'right';
  }

  fold<T>(leftFn: (left: L) => T, rightFn: (right: R) => T): T {
    switch (this.value.kind) {
      case 'left':
        return leftFn(this.value.leftValue);
      case 'right':
        return rightFn(this.value.rightValue);
    }
  }

  async foldAsync<T>(
    leftFn: (left: L) => T,
    rightFn: (right: R) => Promise<T>,
  ): Promise<T> {
    switch (this.value.kind) {
      case 'left':
        return leftFn(this.value.leftValue);
      case 'right':
        return rightFn(this.value.rightValue);
    }
  }

  map<T>(fn: (r: R) => T): Either<L, T> {
    return this.flatMap((r) => Either.right(fn(r)));
  }

  async mapAsync<T>(fn: (r: R) => T): Promise<Either<L, T>> {
    return this.flatMapAsync(async (r) => Either.right(fn(r)));
  }

  flatMap<T>(fn: (right: R) => Either<L, T>): Either<L, T> {
    return this.fold(
      (leftValue) => Either.left(leftValue),
      (rightValue) => fn(rightValue),
    );
  }

  async flatMapAsync<T>(
    fn: (right: R) => Promise<Either<L, T>>,
  ): Promise<Either<L, T>> {
    return this.foldAsync(
      (leftValue) => Either.left(leftValue),
      (rightValue) => fn(rightValue),
    );
  }

  getOrThrow(errorMessage?: string | Error): R {
    const throwFn = () => {
      if (typeof errorMessage === 'string')
        throw Error(errorMessage || 'Value is empty');
      throw errorMessage;
    };

    return this.fold(
      () => throwFn(),
      (someValue) => someValue,
    );
  }

  getOrElse(defaultValue: R): R {
    return this.fold(
      () => defaultValue,
      (someValue) => someValue,
    );
  }

  static left<L, R>(value: L) {
    return new Either<L, R>({ kind: 'left', leftValue: value });
  }

  static right<L, R>(value: R) {
    return new Either<L, R>({ kind: 'right', rightValue: value });
  }
}
