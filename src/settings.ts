import { AdvancedAssertionError } from './error';
import { ThrowAssertionErrorCallback } from './types';

export class Settings {
  private static _instance: Settings;

  static get instance() {
    return (Settings._instance = Settings._instance || new Settings());
  }

  protected _throwAssertionErrorCallback: ThrowAssertionErrorCallback = (
    options,
  ) => {
    throw new AdvancedAssertionError(options);
  };

  get throwAssertionErrorCallback(): ThrowAssertionErrorCallback {
    return this._throwAssertionErrorCallback;
  }

  set throwAssertionErrorCallback(value: ThrowAssertionErrorCallback) {
    this._throwAssertionErrorCallback = value;
  }
}
