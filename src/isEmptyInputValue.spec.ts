import { describe, expect, test } from 'bun:test';
import { isEmptyInputValue } from './isEmptyInputValue';

describe('isEmptyInputValue()', () => {
  test('should return false for any boolean', () => {
    expect(isEmptyInputValue(true)).toBeFalse();
    expect(isEmptyInputValue(false)).toBeFalse();
  });

  test('should return false for finite numbers', () => {
    expect(isEmptyInputValue(0)).toBeFalse();
    expect(isEmptyInputValue(1)).toBeFalse();
    expect(isEmptyInputValue(-1)).toBeFalse();
  });

  test('should return true for NaN', () => {
    expect(isEmptyInputValue(NaN)).toBeTrue();
  });

  test('should return true for any Infinity', () => {
    expect(isEmptyInputValue(Infinity)).toBeTrue();
    expect(isEmptyInputValue(-Infinity)).toBeTrue();
  });

  test('should return true for empty string', () => {
    expect(isEmptyInputValue('')).toBeTrue();
  });

  test('should return false for non-empty string', () => {
    expect(isEmptyInputValue('test')).toBeFalse();
  });

  test('should return true for undefined or null', () => {
    expect(isEmptyInputValue(undefined)).toBeTrue();
    expect(isEmptyInputValue(null)).toBeTrue();
  });

  test('should return false for empty record or array', () => {
    expect(isEmptyInputValue({})).toBeFalse();
    expect(isEmptyInputValue([])).toBeFalse();
  });

  test('should return true for Invalid Date', () => {
    expect(isEmptyInputValue(new Date('test'))).toBeTrue();
  });

  test('should return false for valid Date', () => {
    expect(isEmptyInputValue(new Date())).toBeFalse();
  });
});
