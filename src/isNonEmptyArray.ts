export function isNonEmptyArray<T>(value: Array<T> | any): value is [T, ...T[]] {
  return Array.isArray(value) && value.length > 0;
}
