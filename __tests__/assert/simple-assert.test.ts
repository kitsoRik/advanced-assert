import { AssertionError } from 'assert';
import { simpleAssert } from '../../src/assert/simple-assert';
import { FALSY_VALUE, TRUTHY_VALUE } from '../helpers';

describe('simple assert', () => {
  it('should throw AssertionError', () => {
    expect(() => simpleAssert(FALSY_VALUE, 'Should be true')).toThrow(
      AssertionError,
    );
  });

  it('should not throw AssertionError', () => {
    expect(() => simpleAssert(TRUTHY_VALUE, 'Should be true')).not.toThrow();
  });
});
