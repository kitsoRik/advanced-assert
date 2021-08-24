import { ClassConstructor } from '../types';
import { checkisConditionTruthy } from '../utils';

export function assertWithErrorConstructor<
  TCondition,
  TError extends unknown,
  TErrorClass extends ClassConstructor<TError>,
>(
  truthValue: TCondition,
  ErrorClass: TErrorClass,
  ...args: ConstructorParameters<TErrorClass>
): asserts truthValue {
  if (checkisConditionTruthy(truthValue)) return;

  throw new ErrorClass(...args);
}
