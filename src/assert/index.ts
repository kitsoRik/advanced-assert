import { ClassConstructorWithoutParameters } from '../types';
import { assertWithErrorConstructor } from './assert-with-error-contructor';
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

// assert with error constructor
export function assert<
  TCondition,
  TError extends unknown,
  TErrorClass extends ClassConstructorWithoutParameters<TError>,
>(
  truthValue: TCondition,
  ErrorClass: TErrorClass,
): asserts truthValue;

export function assert<
  TCondition,
  TErrorInstance,
  TError extends unknown,
  TErrorClass extends ClassConstructorWithoutParameters<TError>,
>(
  truthValue: TCondition,
  messageOrErrorInstanceOrErrorConstructor:
    | string
    | TErrorInstance
    | TErrorClass,
): asserts truthValue {
  if (typeof messageOrErrorInstanceOrErrorConstructor === 'string')
    return simpleAssert(truthValue, messageOrErrorInstanceOrErrorConstructor);

  if (typeof messageOrErrorInstanceOrErrorConstructor === 'function')
    return assertWithErrorConstructor(
      truthValue,
      messageOrErrorInstanceOrErrorConstructor as ClassConstructorWithoutParameters<TError>,
    );

  if (messageOrErrorInstanceOrErrorConstructor !== undefined)
    return assertWithErrorInstance(
      truthValue,
      messageOrErrorInstanceOrErrorConstructor,
    );

  throw new Error('Unexpected assert overloaded function');
}
