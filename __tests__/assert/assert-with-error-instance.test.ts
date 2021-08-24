import { assertWithErrorInstance } from '../../src/assert/assert-with-error-instance';
import { FALSY_VALUE, TRUTHY_VALUE } from '../helpers';

class ErrorClass {}

describe('assert with error instance', () => {
  it('should throw text', () => {
    const errorText = 'Should be true';
    expect(() =>
      assertWithErrorInstance(FALSY_VALUE, 'Should be true'),
    ).toThrow(errorText);
  });

  it('should not throw ErrorClass instance', () => {
    expect(() =>
      assertWithErrorInstance(FALSY_VALUE, new ErrorClass()),
    ).toThrow(ErrorClass);
  });

  it('should not throw ErrorClass instance', () => {
    expect(() =>
      assertWithErrorInstance(TRUTHY_VALUE, new ErrorClass()),
    ).not.toThrow();
  });
});
