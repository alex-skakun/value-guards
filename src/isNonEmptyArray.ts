import { isEmptyArray } from './isEmptyArray';

export function isNonEmptyArray<T>(value: Array<T>): value is [T, ...T[]] {
  return !isEmptyArray<T>(value);
}
