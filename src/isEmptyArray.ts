export function isEmptyArray<T>(value: Array<T>): value is [] {
  return value.length === 0;
}
