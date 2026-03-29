import { describe, expect, test } from 'bun:test';
import { isFiniteNumber } from './isFiniteNumber';

describe('isFiniteNumber()', () => {
  test('returns true when value is finite', () => {
    expect(isFiniteNumber(0)).toBeTrue();
    expect(isFiniteNumber(1)).toBeTrue();
    expect(isFiniteNumber(-1)).toBeTrue();
    expect(isFiniteNumber(Number.MAX_SAFE_INTEGER)).toBeTrue();
    expect(isFiniteNumber(Number.MIN_SAFE_INTEGER)).toBeTrue();
    expect(isFiniteNumber(Number.MAX_VALUE)).toBeTrue();
    expect(isFiniteNumber(-Number.MAX_VALUE)).toBeTrue();
    expect(isFiniteNumber(Number.MIN_VALUE)).toBeTrue();
    expect(isFiniteNumber(-Number.MIN_VALUE)).toBeTrue();
  });

  test('returns false for NaN', () => {
    expect(isFiniteNumber(NaN)).toBeFalse();
  });

  test('returns false for infinite values', () => {
    expect(isFiniteNumber(Number.POSITIVE_INFINITY)).toBeFalse();
    expect(isFiniteNumber(Number.NEGATIVE_INFINITY)).toBeFalse();
  });

  test('returns false for non number values', () => {
    expect(isFiniteNumber(null)).toBeFalse();
    expect(isFiniteNumber(undefined)).toBeFalse();
    expect(isFiniteNumber('')).toBeFalse();
    expect(isFiniteNumber('123')).toBeFalse();
    expect(isFiniteNumber([])).toBeFalse();
    expect(isFiniteNumber({})).toBeFalse();
  });
});
