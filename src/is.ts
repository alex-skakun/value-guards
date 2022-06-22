export function createGuard<V extends any, T extends V>(test: (value: V) => boolean): (value: V) => value is T {
  return (value: V): value is T => {
    return test(value);
  };
}
