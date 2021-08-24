import { AssertionError } from 'assert';
import { assert } from '../../src';
import { FALSY_VALUE, TRUTHY_VALUE } from '../helpers';

describe('assert', () => {
  describe('simple assert', () => {
    it('should be passed', () => {
      expect(() => assert(FALSY_VALUE, 'Value must be truthy')).toThrow(
        AssertionError,
      );
    });

    it('should be passed', () => {
      expect(() => assert(TRUTHY_VALUE, 'Value must be truthy')).not.toThrow(
        AssertionError,
      );
    });
  });

  describe('assert with error instance', () => {
    class ErrorClass {}

    it('should be passed', () => {
      expect(() => assert(FALSY_VALUE, new ErrorClass())).toThrow(ErrorClass);
    });
  });

  describe('assert with error constructor', () => {
    it('should be passed', () => {
      class ErrorClass {}

      expect(() => assert(FALSY_VALUE, ErrorClass)).toThrow(ErrorClass);
    });

    it('should be passed', () => {
      class ErrorClass {
        constructor(protected message: string, protected reason: string) {}
      }

      expect(() =>
        assert(FALSY_VALUE, ErrorClass, 'message', 'reason'),
      ).toThrow(ErrorClass);
    });
  });
});
