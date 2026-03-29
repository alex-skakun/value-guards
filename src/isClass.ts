import { Class } from 'type-fest';

export function isClass<Instance extends object, T extends Class<Instance>>(value: T | unknown): value is T {
  return typeof value === 'function'
    && /^(class|function) /.test(value.toString())
    && !Object.getOwnPropertyDescriptor(value, 'prototype')?.writable;
}
