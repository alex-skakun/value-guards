import { describe, expect, test } from 'bun:test';
import { isEmptyRecord } from './isEmptyRecord';

describe('isEmptyRecord()', () => {
  test('should return true for empty object', () => {
    expect(isEmptyRecord({})).toBeTrue();
  });

  test('should return false for non-empty object', () => {
    expect(isEmptyRecord({ testProperty: 'test' })).toBeFalse();
  });

  test('should return true for an object without prototype', () => {
    const testObject = Object.create(null);

    expect(isEmptyRecord(testObject)).toBeTrue();
  });

  test('should return true for an object with non-enumerable properties', () => {
    const testObject = Object.create(Object.prototype, {
      testProperty: {
        value: 'test',
        enumerable: false,
      },
    });

    expect(isEmptyRecord(testObject)).toBeTrue();
  });

  test('should return false for an object with non-enumerable properties using "ownProperties" tester', () => {
    const testObject = Object.create(Object.prototype, {
      testProperty: {
        value: 'test',
        enumerable: false,
      },
    });

    expect(isEmptyRecord(testObject, 'ownProperties')).toBeFalse();
  });

  test('should return false for null or undefined', () => {
    expect(isEmptyRecord(null)).toBeFalse();
    expect(isEmptyRecord(undefined)).toBeFalse();
  });

  test('should return false for function with properties', () => {
    const test = () => {
    };
    test.testProperty = 'test';

    expect(isEmptyRecord(test)).toBeFalse();
  });
});
