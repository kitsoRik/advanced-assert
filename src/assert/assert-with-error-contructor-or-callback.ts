import { ClassConstructorWithoutParameters } from '../types';
import { checkisConditionTruthy } from '../utils';

export function assertWithErrorConstructorOrCallback<
  TCondition,
  TError extends unknown,
  TErrorClass extends ClassConstructorWithoutParameters<TError>,
>(
  truthValue: TCondition,
  ErrorClass: TErrorClass | (() => TError),
): asserts truthValue {
  if (checkisConditionTruthy(truthValue)) return;

  try {
    throw new (ErrorClass as TErrorClass)();
  } catch (e) {
    if (e.name === 'TypeError' && e.message?.includes('is not a constructor')) {
      throw (ErrorClass as () => TError)();
    }

    throw e;
  }
}
