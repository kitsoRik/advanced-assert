import { assertWithInstanceError } from '../../src/assert/assert-with-instance-error';

class ErrorClass {}

describe('assert with instance error', () => {
  it('should throw text', () => {
    const errorText = 'Should be true';
    expect(() => assertWithInstanceError(false, 'Should be true')).toThrow(
      errorText,
    );
  });

  it('should not throw ErrorClass instance', () => {
    expect(() => assertWithInstanceError(false, new ErrorClass())).toThrow(
      ErrorClass,
    );
  });
});
