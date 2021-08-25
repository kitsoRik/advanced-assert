import { AdvancedAssertionError } from '../src';
import { Settings } from '../src/settings';

describe('Settings', () => {
  it('should return default throwErrorCallback', () => {
    expect(Settings.instance.throwAssertionErrorCallback).toBeTruthy();
  });

  it('should throw default AdvancedAssertionError', () => {
    expect(() =>
      Settings.instance.throwAssertionErrorCallback({ message: 'Message' }),
    ).toThrowError(AdvancedAssertionError);
  });

  it('should throw with new callback', () => {
    class CustomError {
      constructor(protected message: string) {}
    }

    Settings.instance.throwAssertionErrorCallback = ({ message }) => {
      throw new CustomError(message);
    };

    expect(() =>
      Settings.instance.throwAssertionErrorCallback({ message: 'Message' }),
    ).toThrowError(CustomError);
  });
});
