import { describe, expect, test } from 'bun:test';
import { isFunction } from './isFunction';

describe('isFunction()', () => {
  test('should return false for non function', () => {
    expect(isFunction(null)).toBeFalse();
    expect(isFunction(undefined)).toBeFalse();
    expect(isFunction([])).toBeFalse();
    expect(isFunction({})).toBeFalse();
    expect(isFunction('test')).toBeFalse();
    expect(isFunction(123)).toBeFalse();
  });

  test('should return true for any function', () => {
    expect(isFunction(function () {})).toBeTrue();
    expect(isFunction(async function () {})).toBeTrue();
    expect(isFunction(() => {})).toBeTrue();
    expect(isFunction(async () => {})).toBeTrue();
    expect(isFunction(function* () {})).toBeTrue();
    expect(isFunction(new Proxy((..._args: any[]) => {}, {
      apply: (target, thisArg, argArray) => {
        return target.apply(thisArg, argArray);
      },
    }))).toBeTrue();
    expect(isFunction(new Proxy(function (..._args: any[]) {}, {
      apply: (target, thisArg, argArray) => {
        return target.apply(thisArg, argArray);
      },
    }))).toBeTrue();
  });

  test('return false for a class', () => {
    expect(isFunction(class {})).toBeFalse();
  });
});
