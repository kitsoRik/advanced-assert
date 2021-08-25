import { AdvancedAssertionError } from './error';
import { ThrowAssertionErrorCallback } from './types';

export class Settings {
  private static _instance: Settings = new Settings();

  static get instance(): Settings {
    return Settings._instance;
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
