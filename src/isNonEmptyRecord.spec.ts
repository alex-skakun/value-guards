import { describe, expect, test } from 'bun:test';
import { isNonEmptyRecord } from './isNonEmptyRecord';

describe('isNonEmptyRecord()', () => {
  test('should return false for empty object', () => {
    expect(isNonEmptyRecord({})).toBeFalse();
  });

  test('should return true for non-empty object', () => {
    expect(isNonEmptyRecord({ testProperty: 'test' })).toBeTrue();
  });

  test('should return true for an object without prototype', () => {
    const testObject = Object.create(null, {
      testProperty: {
        value: 'test',
        enumerable: true,
      },
    });

    expect(isNonEmptyRecord(testObject)).toBeTrue();
  });

  test('should return false for an object with non-enumerable properties', () => {
    const testObject = Object.create(Object.prototype, {
      testProperty: {
        value: 'test',
        enumerable: false,
      },
    });

    expect(isNonEmptyRecord(testObject)).toBeFalse();
  });

  test('should return true for an object with non-enumerable properties using "ownProperties" tester', () => {
    const testObject = Object.create(Object.prototype, {
      testProperty: {
        value: 'test',
        enumerable: false,
      },
    });

    expect(isNonEmptyRecord(testObject, 'ownProperties')).toBeTrue();
  });

  test('should return false for null or undefined', () => {
    expect(isNonEmptyRecord(null)).toBeFalse();
    expect(isNonEmptyRecord(undefined)).toBeFalse();
  });

  test('should return false for function with properties', () => {
    const test = () => {};
    test.testProperty = 'test';

    expect(isNonEmptyRecord(test)).toBeFalse();
  });
});
