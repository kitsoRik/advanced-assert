import { ClassConstructorWithoutParameters } from '../types';
import { checkisConditionTruthy } from '../utils';

export function assertWithErrorConstructor<
  TCondition,
  TError extends Object,
  TErrorClass extends ClassConstructorWithoutParameters<TError>,
>(truthValue: TCondition, ErrorClass: TErrorClass): asserts truthValue {
  if (checkisConditionTruthy(truthValue)) return;

  throw new ErrorClass();
}
