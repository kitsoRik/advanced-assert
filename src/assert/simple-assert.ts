import { AdvancedAssertionError } from '../error';

import { checkisConditionTruthy } from '../utils';

export function simpleAssert<TCondition>(
  truthValue: TCondition,
  message: string,
): asserts truthValue {
  if (checkisConditionTruthy(truthValue)) return;

  throw new AdvancedAssertionError({ message });
}
