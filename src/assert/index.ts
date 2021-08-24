import { assertWithErrorInstance } from './assert-with-error-instance';
import { simpleAssert } from './simple-assert';

export function assert<TCondition>(
  truthValue: TCondition,
  message: string,
): asserts truthValue;
export function assert<TCondition>(
  truthValue: TCondition,
  messageOrErrorInstance: any,
): asserts truthValue {
  if (typeof messageOrErrorInstance === 'string')
    return simpleAssert(truthValue, messageOrErrorInstance);
  if (messageOrErrorInstance !== undefined)
    return assertWithErrorInstance(truthValue, messageOrErrorInstance);

  throw new Error('Unexpected assert overloaded function');
}
