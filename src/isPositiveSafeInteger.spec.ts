import { describe, expect, test } from 'bun:test';
import { isPositiveSafeInteger } from './isPositiveSafeInteger';

describe('isPositiveSafeInteger()', () => {
  test('return true for positive safe integer values', () => {
    expect(isPositiveSafeInteger(1)).toBeTrue();
    expect(isPositiveSafeInteger(Number.MAX_SAFE_INTEGER)).toBeTrue();
  });

  test('return false for negative safe integer values', () => {
    expect(isPositiveSafeInteger(-1)).toBeFalse();
    expect(isPositiveSafeInteger(Number.MIN_SAFE_INTEGER)).toBeFalse();
  });

  test('return false for zero values', () => {
    expect(isPositiveSafeInteger(0)).toBeFalse();
  });

  test('return false for NaN', () => {
    expect(isPositiveSafeInteger(NaN)).toBeFalse();
  });

  test('return false for nonsafe integer values', () => {
    expect(isPositiveSafeInteger(Number.MAX_SAFE_INTEGER + 1)).toBeFalse();
    expect(isPositiveSafeInteger(Number.MIN_SAFE_INTEGER - 1)).toBeFalse();
  });

  test('return false for float values', () => {
    expect(isPositiveSafeInteger(1.5)).toBeFalse();
    expect(isPositiveSafeInteger(-1.5)).toBeFalse();
  });

  test('return false for non number values', () => {
    expect(isPositiveSafeInteger(null)).toBeFalse();
    expect(isPositiveSafeInteger(undefined)).toBeFalse();
    expect(isPositiveSafeInteger('')).toBeFalse();
    expect(isPositiveSafeInteger('123')).toBeFalse();
    expect(isPositiveSafeInteger([])).toBeFalse();
    expect(isPositiveSafeInteger({})).toBeFalse();
  });
});
