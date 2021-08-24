import { assertWithErrorConstructor } from '../../src/assert/assert-with-error-contructor';
import { FALSY_VALUE, TRUTHY_VALUE } from '../helpers';

class ErrorClass {}

describe('assert with error instance', () => {
  it('should not throw ErrorClass instance', () => {
    expect(() => assertWithErrorConstructor(FALSY_VALUE, ErrorClass)).toThrow(
      ErrorClass,
    );
  });

  it('should not throw ErrorClass instance', () => {
    expect(() =>
      assertWithErrorConstructor(TRUTHY_VALUE, ErrorClass),
    ).not.toThrow();
  });
});
