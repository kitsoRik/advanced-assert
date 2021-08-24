import { AssertionError } from 'assert';
import { simpleAssert } from '../../src/assert/simple-assert';

describe('simple assert', () => {
  it('should throw AssertionError', () => {
    expect(() => simpleAssert(false, 'Should be true')).toThrow(AssertionError);
  });

  it('should not throw AssertionError', () => {
    expect(() => simpleAssert(true, 'Should be true')).not.toThrow();
  });

  it('should check that 0 is falsy', () => {
    expect(() => simpleAssert(0, 'Should throw error')).toThrow(AssertionError);
  });

  it('should check that empty string is falsy', () => {
    expect(() => simpleAssert('', 'Should throw error')).toThrow(
      AssertionError,
    );
  });

  it('should check that null is falsy', () => {
    expect(() => simpleAssert(null, 'Should throw error')).toThrow(
      AssertionError,
    );
  });

  it('should check that undefined is falsy', () => {
    expect(() => simpleAssert(undefined, 'Should throw error')).toThrow(
      AssertionError,
    );
  });
});
