import { checkIsConditionTruthy } from '../../src/utils/check-is-condition-truthy';

describe('checkIsConditionTruthy', () => {
  it('should check that 0 is falsy', () => {
    expect(checkIsConditionTruthy(0)).toBeFalsy();
  });

  it('should check that empty string is falsy', () => {
    expect(checkIsConditionTruthy('')).toBeFalsy();
  });

  it('should check that null is falsy', () => {
    expect(checkIsConditionTruthy(null)).toBeFalsy();
  });

  it('should check that undefined is falsy', () => {
    expect(checkIsConditionTruthy(undefined)).toBeFalsy();
  });
});
