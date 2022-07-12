export function isNonEmptyArray<T>(value: [T?]): value is [T];
export function isNonEmptyArray<T>(value: Array<T>): value is [T, ...T[]];
export function isNonEmptyArray<T>(value: any): value is [T, ...T[]];
export function isNonEmptyArray<T>(value: Array<T> | any): value is [T, ...T[]] {
  return Array.isArray(value) && value.length > 0;
}
