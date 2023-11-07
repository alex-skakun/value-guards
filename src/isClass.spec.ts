import { describe, expect, test } from 'bun:test';
import { isClass } from './isClass';

describe('isClass()', () => {
  test('return true for a class', () => {
    expect(isClass(class {})).toBeTrue();
    expect(isClass(class NamedClass {})).toBeTrue();
  });

  test('return true for native classes', () => {
    expect(isClass(Object)).toBeTrue();
    expect(isClass(Array)).toBeTrue();
    expect(isClass(Function)).toBeTrue();
    expect(isClass(Date)).toBeTrue();
    expect(isClass(RegExp)).toBeTrue();
    expect(isClass(Promise)).toBeTrue();
  });

  test('return false for a function', () => {
    expect(isClass(() => {})).toBeFalse();
    expect(isClass(async () => {})).toBeFalse();
    expect(isClass(function () {})).toBeFalse();
    expect(isClass(async function () {})).toBeFalse();
    expect(isClass(function* () {})).toBeFalse();
  });
});
