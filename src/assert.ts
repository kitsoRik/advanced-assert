import { AssertionError } from 'assert';

export function assert<TCondition>(
  truthValue: TCondition,
  message: string,
): asserts truthValue {
  if (!truthValue) {
    throw new AssertionError({ message });
  }
}
