import { assertWithErrorConstructorOrCallback } from '../../src/assert/assert-with-error-contructor-or-callback';
import { FALSY_VALUE, TRUTHY_VALUE } from '../helpers';

describe('assert with error instance', () => {
  it('should not throw ErrorClass instance', () => {
    class ErrorClass {}
    expect(() => assertWithErrorConstructorOrCallback(FALSY_VALUE, ErrorClass)).toThrow(
      ErrorClass,
    );
  });

  it('should not throw ErrorClass instance', () => {
    class ErrorClass {}

    expect(() =>
      assertWithErrorConstructorOrCallback(TRUTHY_VALUE, ErrorClass),
    ).not.toThrow();
  });

  it('should throw result of arrow function', () => {
    class ErrorClass {}

    expect(() =>
      assertWithErrorConstructorOrCallback(FALSY_VALUE, () => new ErrorClass()),
    ).toThrow(ErrorClass);
  });

  it('should throw result of defenition function', () => {
    class ErrorClass {}

    expect(() =>
      assertWithErrorConstructorOrCallback(FALSY_VALUE, function () {
        return new ErrorClass();
      }),
    ).toThrow(ErrorClass);
  });
});
