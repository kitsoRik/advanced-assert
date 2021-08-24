import { assertWithErrorInstance } from '../../src/assert/assert-with-error-instance';

class ErrorClass {}

describe('assert with error instance', () => {
  it('should throw text', () => {
    const errorText = 'Should be true';
    expect(() => assertWithErrorInstance(false, 'Should be true')).toThrow(
      errorText,
    );
  });

  it('should not throw ErrorClass instance', () => {
    expect(() => assertWithErrorInstance(false, new ErrorClass())).toThrow(
      ErrorClass,
    );
  });

  it('should not throw ErrorClass instance', () => {
    expect(() => assertWithErrorInstance(true, new ErrorClass())).not.toThrow();
  });
});
