import { describe, expect, test } from 'bun:test';
import { isEmptyArray } from './isEmptyArray';

describe('isEmptyArray()', () => {
  test('should return true for empty array', () => {
    expect(isEmptyArray([])).toBeTrue();
  });

  test('should return false for non-empty array', () => {
    expect(isEmptyArray([1])).toBeFalse();
  });

  test('should return false for array-like object', () => {
    expect(isEmptyArray({ length: 1 })).toBeFalse();
    expect(isEmptyArray({ length: 0 })).toBeFalse();
  });
});
