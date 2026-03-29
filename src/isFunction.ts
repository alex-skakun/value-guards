export function isFunction<T extends (...args: any[]) => any>(value: T | unknown): value is T {
  return typeof value === 'function' && !/^class /.test(value.toString());
}
