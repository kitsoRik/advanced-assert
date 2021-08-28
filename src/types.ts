export type ClassConstructorWithoutParameters<T> = {
  new (): T;
};

export type ThrowAssertionErrorCallback = (options: {
  message: string;
}) => never;
