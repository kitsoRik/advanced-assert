import { AssertionError } from 'assert';
import { assert } from '../src';

describe('assert', () => {
  it('should throw AssertionErrorWithMessage', () => {
    expect(() => assert(false, 'Message')).toThrow(AssertionError);
  });
});
