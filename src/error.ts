import { AssertionError } from 'assert';

export class AdvancedAssertionError<TActual, TExpected> extends AssertionError {
  constructor(
    protected options?: {
      message?: string;
      actual?: TActual;
      expected?: TExpected;
      operator?: string;
      stackStartFn?: () => void;
    },
  ) {
    super(options);
  }
}
