export function isFunction<T extends (...args: any[]) => any>(value: T | any): value is T {
  return typeof value === 'function';
}
