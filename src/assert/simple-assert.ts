import { AssertionError } from 'assert';

import { checkisConditionTruthy } from '../utils';

export function simpleAssert<TCondition>(
  truthValue: TCondition,
  message: string,
): asserts truthValue {
  if (checkisConditionTruthy(truthValue)) return;

  throw new AssertionError({ message });
}
