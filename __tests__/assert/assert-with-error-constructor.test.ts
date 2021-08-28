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
});
