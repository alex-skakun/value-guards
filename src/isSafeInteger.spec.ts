import { describe, expect, test } from 'bun:test';
import { isSafeInteger } from './isSafeInteger';

describe('isSafeInteger()', () => {
  test('return true for safe integer values', () => {
    expect(isSafeInteger(0)).toBeTrue();
    expect(isSafeInteger(-1)).toBeTrue();
    expect(isSafeInteger(1)).toBeTrue();
    expect(isSafeInteger(Number.MAX_SAFE_INTEGER)).toBeTrue();
    expect(isSafeInteger(Number.MIN_SAFE_INTEGER)).toBeTrue();
  });

  test('return false for NaN', () => {
    expect(isSafeInteger(NaN)).toBeFalse();
  });

  test('return false for nonsafe integer values', () => {
    expect(isSafeInteger(Number.MAX_SAFE_INTEGER + 1)).toBeFalse();
    expect(isSafeInteger(Number.MIN_SAFE_INTEGER - 1)).toBeFalse();
  });

  test('return false for float values', () => {
    expect(isSafeInteger(1.5)).toBeFalse();
    expect(isSafeInteger(-1.5)).toBeFalse();
  });

  test('return false for non number values', () => {
    expect(isSafeInteger(null)).toBeFalse();
    expect(isSafeInteger(undefined)).toBeFalse();
    expect(isSafeInteger('')).toBeFalse();
    expect(isSafeInteger('123')).toBeFalse();
    expect(isSafeInteger([])).toBeFalse();
    expect(isSafeInteger({})).toBeFalse();
  });
});
