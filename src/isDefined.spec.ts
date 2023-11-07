import { describe, expect, test } from 'bun:test';
import { isDefined } from './isDefined';

describe('isDefined()', () => {
  test('should return false for null', () => {
    expect(isDefined(null)).toBeFalse();
  });

  test('should return false for undefined', () => {
    expect(isDefined(undefined)).toBeFalse();
  });

  test('should return true for zero', () => {
    expect(isDefined(0)).toBeTrue();
  });

  test('should return true for NaN', () => {
    expect(isDefined(NaN)).toBeTrue();
  });

  test('should return true for empty string', () => {
    expect(isDefined('')).toBeTrue();
  });

  test('should return true for any boolean', () => {
    expect(isDefined(true)).toBeTrue();
    expect(isDefined(false)).toBeTrue();
  });
});
