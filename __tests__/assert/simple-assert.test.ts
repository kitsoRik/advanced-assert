import { AdvancedAssertionError } from '../../src';
import { simpleAssert } from '../../src/assert/simple-assert';
import { FALSY_VALUE, TRUTHY_VALUE } from '../helpers';

describe('simple assert', () => {
  it('should throw AdvancedAssertionError', () => {
    expect(() => simpleAssert(FALSY_VALUE, 'Should be true')).toThrow(
      AdvancedAssertionError,
    );
  });

  it('should not throw AdvancedAssertionError', () => {
    expect(() => simpleAssert(TRUTHY_VALUE, 'Should be true')).not.toThrow();
  });
});
