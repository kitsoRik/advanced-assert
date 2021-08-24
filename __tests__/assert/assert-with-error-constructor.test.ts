import { assertWithErrorConstructor } from '../../src/assert/assert-with-error-contructor';
import { FALSY_VALUE, TRUTHY_VALUE } from '../helpers';

describe('assert with error instance', () => {
  it('should not throw ErrorClass instance', () => {
    class ErrorClass {}
    expect(() => assertWithErrorConstructor(FALSY_VALUE, ErrorClass)).toThrow(
      ErrorClass,
    );
  });

  it('should not throw ErrorClass instance', () => {
    class ErrorClass {}

    expect(() =>
      assertWithErrorConstructor(TRUTHY_VALUE, ErrorClass),
    ).not.toThrow();
  });

  it('should throw ErrorClass instance with parameters in constructor', () => {
    class ErrorClass {
      constructor(protected message: string) {}
    }

    expect(() =>
      assertWithErrorConstructor(
        FALSY_VALUE,
        ErrorClass,
        'Value must be truthy',
      ),
    ).toThrow();
  });

  it('should not throw ErrorClass instance with parameters in constructor', () => {
    class ErrorClass {
      constructor(protected message: string) {}
    }

    expect(() =>
      assertWithErrorConstructor(
        TRUTHY_VALUE,
        ErrorClass,
        'Value must be truthy',
      ),
    ).not.toThrow();
  });
});
