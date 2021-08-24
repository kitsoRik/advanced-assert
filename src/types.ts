export type ClassConstructor<T, A extends unknown[] = unknown[]> = {
  new (...args: A): T;
};
