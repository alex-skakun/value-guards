import { describe, expect, test } from 'bun:test';
import { isSafeNumber } from './isSafeNumber';

describe('isSafeNumber()', () => {
  test('return true for any safe number', () => {
    expect(isSafeNumber(0)).toBeTrue();
    expect(isSafeNumber(1)).toBeTrue();
    expect(isSafeNumber(-1)).toBeTrue();
    expect(isSafeNumber(1.5)).toBeTrue();
    expect(isSafeNumber(-1.5)).toBeTrue();
    expect(isSafeNumber(Number.MAX_SAFE_INTEGER)).toBeTrue();
    expect(isSafeNumber(Number.MIN_SAFE_INTEGER)).toBeTrue();
    expect(isSafeNumber(Number.MAX_VALUE)).toBeTrue();
    expect(isSafeNumber(Number.MIN_VALUE)).toBeTrue();
  });

  test('return false for NaN', () => {
    expect(isSafeNumber(NaN)).toBeFalse();
  });

  test('return false for non number values', () => {
    expect(isSafeNumber(null)).toBeFalse();
    expect(isSafeNumber(undefined)).toBeFalse();
    expect(isSafeNumber('')).toBeFalse();
    expect(isSafeNumber('123')).toBeFalse();
    expect(isSafeNumber([])).toBeFalse();
    expect(isSafeNumber({})).toBeFalse();
  });
});
