export function isNonEmptyArray<T>(value: [T?]): value is [T];
export function isNonEmptyArray<T>(value: T[]): value is [T, ...T[]];
export function isNonEmptyArray<T>(value: unknown): value is [T, ...T[]];
export function isNonEmptyArray<T>(value: T[] | unknown): value is [T, ...T[]] {
  return Array.isArray(value) && value.length > 0;
}
