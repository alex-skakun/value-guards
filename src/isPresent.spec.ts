import { describe, expect, test } from 'bun:test';
import { isDefined, isPresent } from './isPresent';

describe('isPresent()', () => {
  test('should return false for null', () => {
    expect(isPresent(null)).toBeFalse();
  });

  test('should return false for undefined', () => {
    expect(isPresent(undefined)).toBeFalse();
  });

  test('should return true for zero', () => {
    expect(isPresent(0)).toBeTrue();
  });

  test('should return true for NaN', () => {
    expect(isPresent(NaN)).toBeTrue();
  });

  test('should return true for empty string', () => {
    expect(isPresent('')).toBeTrue();
  });

  test('should return true for any boolean', () => {
    expect(isPresent(true)).toBeTrue();
    expect(isPresent(false)).toBeTrue();
  });

  test('has alias isDefined()', () => {
    expect(Object.is(isDefined, isPresent)).toBeTrue();
  });
});
