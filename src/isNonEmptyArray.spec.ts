import { describe, expect, test } from 'bun:test';
import { isNonEmptyArray } from './isNonEmptyArray';

describe('isNonEmptyArray()', () => {
  test('should return true for non-empty array', () => {
    expect(isNonEmptyArray([1])).toBeTrue();
  });

  test('should return false for empty array', () => {
    expect(isNonEmptyArray([])).toBeFalse();
  });

  test('should return false for array-like object', () => {
    expect(isNonEmptyArray({ length: 1 })).toBeFalse();
    expect(isNonEmptyArray({ length: 0 })).toBeFalse();
  });
});
