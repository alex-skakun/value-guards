# value-guards

Small set of functions for value validation and type guarding.

## `isPresent()`

> Previously called `isDefined()` and still accessible by this name, but it is deprecated.
> Will be removed in next major version.

Returns `true` if passed value is not `null` or `undefined`. 
Confirms that passed value `T` is `NonNullable<T>`.

```typescript
import { isPresent } from 'value-guards';

type Point = null | {
  x: number;
  y: number;
};

function handlePoint(point: Point): void {
  if (isPresent(point)) {
    // point is NonNullable<Point>
  } else {
    // point is null
  }
}
```

## `isNonPresent()`

Works opposite to `isPresent()`. Returns `true` when passed value is `null` or `undefined`.

## `isFunction()`

Confirms that passed value is function and is not class.

```typescript
import { isFunction } from 'value-guards';

type Initial<T> = T | (() => T);

function handle<T>(initialValue: Initial<T>): void {
  if (isFunction(initialValue)) {
    // initialValue is () => T
  }
}
```

## `isClass()`

Confirms that passed value is constructable (can be used with operator `new`).

```typescript
import { isClass } from 'value-guards';

type Initial<T> = { new(): T } | (() => T);

function handle<T>(initialValue: Initial<T>): void {
  if (isClass(initialValue)) {
    // initialValue may be safely used with new as constructor
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

Returns `true` for "empty" values.

- `boolean` is always not empty;
- `number` is empty when it is `NaN` or `Infinity`;
- `string` empty when it is `''` (empty string);
- `Date` empty when it is `Invalid Date`;
- for other types is uses `!`.

## Number utilities

### `isFiniteNumber()`

The same as standard `Number.isFinite()` but confirms that passed value is `number`.

### `isSafeNumber()`

Checks that passed value is finite and fits in bounds of `-Number.MAX_VALUE` and `+Number.MAX_VALUE`.
Confirms that passed value is `number`.

### `isSafeInteger()`

Checks that passed value is safe integer. Confirms that passed value is `number`.

### `isPositiveSafeInteger()`

Checks that passed value is safe integer and strictly grater than zero. Confirms that passed value is `number`.

### `isNonNegativeSafeInteger()`

Checks that passed value is safe integer and grater or equal zero. Confirms that passed value is `number`.

## `mapHas()`

Confirms that passed Map has passed key. It means that next interactions with passed key will work as value really exists in Set.

```typescript
import { mapHas } from 'value-guards';

const map = new Map().set('a', [1, 2, 3]);

if (mapHas(map, 'a')) {
  map.get('a'); // returns strictly an array type without possible undefined
  map.has('a'); // returns striclty true
  map.delete('a'); // returns strictly true
}
```

## `setHas()`

Confirms that passed Set has passed key. It means that next interactions with passed key will work as value really exists in Set. 

```typescript
import { setHas } from 'value-guards';

const set = new Set().add('a');

if (setHas(set, 'a')) {
  set.has('a'); // returns striclty true
  set.delete('a'); // returns strictly true
}
```

## Exported types

Completely reexports `type-fest` library.

### Own Types

- `NonPresent` - equals to `null | undefined`;
- `Nullish<T>` - equals to `T | null | undefined`;

# License

MIT
