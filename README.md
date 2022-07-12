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

## `isEmptyArray()`

Confirms that passed value is empty array.