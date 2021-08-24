import { assertWithErrorInstance } from './assert-with-error-instance';
import { simpleAssert } from './simple-assert';

// simple assert
export function assert<TCondition>(
  truthValue: TCondition,
  message: string,
): asserts truthValue;

// assert with error instance
export function assert<TCondition, TErrorInstance>(
  truthValue: TCondition,
  errorInstance: TErrorInstance,
): asserts truthValue;

export function assert<TCondition, TErrorInstance>(
  truthValue: TCondition,
  messageOrErrorInstance: string | TErrorInstance,
): asserts truthValue {
  if (typeof messageOrErrorInstance === 'string')
    return simpleAssert(truthValue, messageOrErrorInstance);
  if (messageOrErrorInstance !== undefined)
    return assertWithErrorInstance(truthValue, messageOrErrorInstance);

  throw new Error('Unexpected assert overloaded function');
}
