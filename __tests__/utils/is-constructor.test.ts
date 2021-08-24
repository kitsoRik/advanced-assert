import { isConstructor } from '../../src/utils/is-constructor';

describe('isConstructor', () => {
  it('should check that class is contructor', () => {
    class ErrorClass {}

    expect(isConstructor(ErrorClass)).toBeTruthy();
  });

  it('should check that function is contructor', () => {
    expect(isConstructor(function () {})).toBeTruthy();
  });

  it('should check that arrow function is not contructor', () => {
    expect(isConstructor(() => {})).toBeFalsy();
  });

  it('should check that function is not contructor', () => {
    expect(isConstructor((function () {})())).toBeFalsy();
  });

  it('should check that function is not contructor', () => {
    expect(isConstructor(() => {})).toBeFalsy();
  });

  it('should check that function is not contructor', () => {
    expect(isConstructor({})).toBeFalsy();
  });
});
