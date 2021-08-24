import { simpleAssert } from './simple-assert';

export function assert<TCondition>(
  truthValue: TCondition,
  message: string,
): asserts truthValue;
export function assert<TCondition>(
  truthValue: TCondition,
  message: any,
): asserts truthValue {
  if (typeof message === 'string') return simpleAssert(truthValue, message);

  throw new Error('Unexpected assert overloaded function');
}
