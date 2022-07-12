# value-guards

Small set of functions for value validation and type guarding.

## `isDefined()`

Returns `true` if passed value is not `null` or `undefined`. 
Confirms that passed value `T` is `NonNullable<T>`.

```typescript
import { isDefined } from 'value-guards';


type Point = null | {
  x: number;
  y: number;
};

function handlePoint(point: Point): void {
  if (isDefined(point)) {
    // point is NonNullable<Point>
  } else {
    // point is null
  }
}
```

## `isFunction()`

Confirms that passed value is function.

```typescript
import { isFunction } from 'value-guards';


type Initial<T> = T | (() => T);

function handle<T>(initialValue: Initial<T>): void {
  if (isFunction(initialValue)) {
    // initialValue is () => T
  }
}
```

## `isEmptyArray()`

Confirms that passed value is empty array.

```typescript
import { isEmptyArray } from 'value-guards';


function handle(values: number[]): void {
  if (isEmptyArray(values)) {
    // values[0] - TS error. Values has no value at index "0"
  }
}
```

## `isNonEmptyArray()`

Confirms that passed value is array, and it's not empty.

```typescript
import { isNonEmptyArray } from 'value-guards';


function handle(values: [number?]): void {
  if (isNonEmptyArray(values)) {
    const value = values[0];
    // typeof value is "number"
  }
}
```

## `isEmptyRecord()`

Returns `true` when passed object is empty. 
There are two types of properties checking:
- `"keys"` (default) - Uses internally `Object.keys()`.
- `"ownProperties"` - Uses `Object.ownPropertyNames()`.

```typescript
import { isEmptyRecord } from 'value-guards';


isEmptyRecord({}); // true
isEmptyRecord(Object.prototype); // true
isEmptyRecord(Object.prototype, 'ownProperties'); // false
isEmptyRecord(null); // false
isEmptyRecord(undefined); // false
```

## `isNonEmptyRecord()`

Returns `true` is passed object contains properties. 
There are two types of properties checking:
- `"keys"` (default) - Uses internally `Object.keys()`.
- `"ownProperties"` - Uses `Object.ownPropertyNames()`.

```typescript
import { isNonEmptyRecord } from 'value-guards';


isNonEmptyRecord({}); // false
isNonEmptyRecord(Object.prototype); // false
isNonEmptyRecord(Object.prototype, 'ownProperties'); // true
isNonEmptyRecord(null); // false
isNonEmptyRecord(undefined); // false
```

## `isEmptyInputValue()`

Returns `true` for "empty" values of `HTMLInputElement`.

- `boolean` is always not empty;
- `number` is empty when it is `NaN` or `Infinity`;
- `string` empty when it is `''` (empty string);
- `Date` empty when it is `Invalid Date`;
- for other types is uses `!`.

# License

MIT