import { Settings } from '../settings';

import { checkisConditionTruthy } from '../utils';

export function simpleAssert<TCondition>(
  truthValue: TCondition,
  message: string,
): asserts truthValue {
  if (checkisConditionTruthy(truthValue)) return;

  throw new Settings.instance.ErrorContructor({ message });
}
