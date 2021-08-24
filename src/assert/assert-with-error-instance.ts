import { checkisConditionTruthy } from '../utils';

export function assertWithErrorInstance<TCondition, TErrorInstance>(
  truthValue: TCondition,
  errorInstance: TErrorInstance,
): asserts truthValue {
  if (checkisConditionTruthy(truthValue)) return;

  throw errorInstance;
}
