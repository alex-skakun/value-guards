interface ClassType<T extends object> {
  new(...args: any[]): T;
}

export function isClass<Instance extends object, T extends ClassType<Instance>>(value: T | any): value is T {
  return typeof value === 'function'
    && /^(class|function) /.test(value.toString())
    && !Object.getOwnPropertyDescriptor(value, 'prototype')?.writable;
}
