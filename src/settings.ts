import { AdvancedAssertionError } from './error';
import { ClassConstructor } from './types';

export class Settings {
  private static _instance: Settings;

  static get instance() {
    return (Settings._instance = Settings._instance || new Settings());
  }

  protected _errorConstructor: ClassConstructor<any> = AdvancedAssertionError;

  get ErrorContructor() {
    return this._errorConstructor;
  }

  set ErrorContructor(value: any) {
    this._errorConstructor = value;
  }
}
