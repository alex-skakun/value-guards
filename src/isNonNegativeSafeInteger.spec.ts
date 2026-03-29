import { describe, expect, test } from 'bun:test';
import { isNonNegativeSafeInteger } from './isNonNegativeSafeInteger';

describe('isNonNegativeSafeInteger()', () => {
  test('return true for positive safe integer values', () => {
    expect(isNonNegativeSafeInteger(1)).toBeTrue();
    expect(isNonNegativeSafeInteger(Number.MAX_SAFE_INTEGER)).toBeTrue();
  });

  test('return false for negative safe integer values', () => {
    expect(isNonNegativeSafeInteger(-1)).toBeFalse();
    expect(isNonNegativeSafeInteger(Number.MIN_SAFE_INTEGER)).toBeFalse();
  });

  test('return true for zero values', () => {
    expect(isNonNegativeSafeInteger(0)).toBeTrue();
  });

  test('return false for NaN', () => {
    expect(isNonNegativeSafeInteger(NaN)).toBeFalse();
  });

  test('return false for nonsafe integer values', () => {
    expect(isNonNegativeSafeInteger(Number.MAX_SAFE_INTEGER + 1)).toBeFalse();
    expect(isNonNegativeSafeInteger(Number.MIN_SAFE_INTEGER - 1)).toBeFalse();
  });

  test('return false for float values', () => {
    expect(isNonNegativeSafeInteger(1.5)).toBeFalse();
    expect(isNonNegativeSafeInteger(-1.5)).toBeFalse();
  });

  test('return false for non number values', () => {
    expect(isNonNegativeSafeInteger(null)).toBeFalse();
    expect(isNonNegativeSafeInteger(undefined)).toBeFalse();
    expect(isNonNegativeSafeInteger('')).toBeFalse();
    expect(isNonNegativeSafeInteger('123')).toBeFalse();
    expect(isNonNegativeSafeInteger([])).toBeFalse();
    expect(isNonNegativeSafeInteger({})).toBeFalse();
  });
});
