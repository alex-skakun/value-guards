import { describe, expect, test } from 'bun:test';
import { isNonPresent } from './isNonPresent';

describe('isNonPresent()', () => {
  test('null is non-present', () => {
    expect(isNonPresent(null)).toBeTrue();
  });

  test('undefined is non-present', () => {
    expect(isNonPresent(undefined)).toBeTrue();
  });

  test('NaN is present', () => {
    expect(isNonPresent(NaN)).toBeFalse();
  });

  test('0 is present', () => {
    expect(isNonPresent(0)).toBeFalse();
  });

  test('empty string is present', () => {
    expect(isNonPresent('')).toBeFalse();
  });

  test('false string is present', () => {
    expect(isNonPresent(false)).toBeFalse();
  });
});
