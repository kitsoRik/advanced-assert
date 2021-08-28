# advanced-assert

### Install

`npm install advanced-assert --save`

Only es6+

### Example

```typescript
import { assert } from "advanced-assert";

function divide(a: number, b: number) {
  assert(b !== 0, "second parameter should not equal 0");

  return a / b;
}

divide(10, 5); // OK
divide(5, 0); // throw AdvancedAssertionError
```

### Difference between `advanced-assert` and `assert`

Our package provides better functional to throw errors.

#### Custom error
```typescript
import { assert } from "advanced-assert";

class NotFoundError {}

function findUserOrFail() {
  const user: User | undefined = findUser();

  assert(user, NotFoundError);

  return user; // will always return User
}
```

#### Configure package behaviour
```typescript
import { assert, Settings } from "advanced-assert";

class BaseAppError {
  constructor(protected message: string) {}
}

Settings.instance.throwAssertionErrorCallback = ({ message }) => {
  throw new BaseAppError(message);
};

function findUserOrFail() {
  const user: User | undefined = findUser();

  assert(user, "User must be found"); // throw BaseAppError

  return user;
}

```