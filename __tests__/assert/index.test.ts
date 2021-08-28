import { AdvancedAssertionError, assert } from '../../src';
import { Settings } from '../../src/settings';
import { FALSY_VALUE, TRUTHY_VALUE } from '../helpers';

describe('assert', () => {
  describe('simple assert', () => {
    it('should be passed', () => {
      expect(() => assert(FALSY_VALUE, 'Value must be truthy')).toThrow(
        AdvancedAssertionError,
      );
    });

    it('should be passed', () => {
      expect(() => assert(TRUTHY_VALUE, 'Value must be truthy')).not.toThrow(
        AdvancedAssertionError,
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
  });

  describe('assert with callback constructor', () => {
    it('should be passed', () => {
      class ErrorClass {}

      expect(() => assert(FALSY_VALUE, () => new ErrorClass())).toThrow(
        ErrorClass,
      );
    });

    it('should be passed', () => {
      class ErrorClass {}

      expect(() =>
        assert(FALSY_VALUE, function () {
          return new ErrorClass();
        }),
      ).toThrow(ErrorClass);
    });
  });

  describe('Settings', () => {
    describe('throwAssertionCallbackError', () => {
      it('should throw default AdvancedAssertionError', () => {
        expect(() => assert(FALSY_VALUE, 'Assertion message')).toThrow(
          AdvancedAssertionError,
        );
      });

      it('should throw error from new callback', () => {
        class ErrorClass {
          constructor(protected message: string) {}
        }

        Settings.instance.throwAssertionErrorCallback = ({ message }) => {
          throw new ErrorClass(message);
        };

        expect(() => assert(FALSY_VALUE, 'Assertion message')).toThrow(
          ErrorClass,
        );
      });
    });
  });
});
