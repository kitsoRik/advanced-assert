import { simpleAssert } from './simpleAssert';

export function assert<TCondition>(
  truthValue: TCondition,
  message: string,
): asserts truthValue {
  if (typeof message === 'string') return simpleAssert(truthValue, message);
}
