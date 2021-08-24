import { AssertionError } from 'assert';
import { simpleAssert } from '../../src/assert/simple-assert';

describe('simple assert', () => {
  it('should throw AssertionError', () => {
    expect(() => simpleAssert(false, 'Should be true')).toThrow(AssertionError);
  });

  it('should not throw AssertionError', () => {
    expect(() => simpleAssert(true, 'Should be true')).not.toThrow();
  });
});
