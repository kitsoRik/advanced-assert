export function checkIsConditionTruthy<TCondition>(
  condition: TCondition,
): boolean {
  return !!condition;
}
