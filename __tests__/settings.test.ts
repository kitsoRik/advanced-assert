import { AdvancedAssertionError } from '../src';
import { Settings } from '../src/settings';

describe('Settings', () => {
  it('should return default AdvancedAssertionConstructor', () => {
    expect(Settings.instance.ErrorContructor).toBe(
      AdvancedAssertionError,
    );
  });

  it('should return changed AdvancedAssertionConstructor', () => {
    class ErrorClass {}

    Settings.instance.ErrorContructor = ErrorClass;

    expect(Settings.instance.ErrorContructor).toBe(ErrorClass);
  });
});
