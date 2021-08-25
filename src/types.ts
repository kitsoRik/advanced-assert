export type ClassConstructor<T, A extends unknown[] = unknown[]> = {
  new (...args: A): T;
};

export type ThrowAssertionErrorCallback = (options: {
  message: string;
}) => never;
