import { isNonEmptyRecord } from './isNonEmptyRecord';

describe('isNonEmptyRecord()', () => {

  it('should return false for empty object', () => {
    expect(isNonEmptyRecord({})).toBe(false);
  });

  it('should return true for non-empty object', () => {
    expect(isNonEmptyRecord({ testProperty: 'test' })).toBe(true);
  });

  it('should return true for an object without prototype', () => {
    const testObject = Object.create(null, {
      testProperty: {
        value: 'test',
        enumerable: true,
      }
    });

    expect(isNonEmptyRecord(testObject)).toBe(true);
  });

  it('should return false for an object with non-enumerable properties', () => {
    const testObject = Object.create(Object.prototype, {
      testProperty: {
        value: 'test',
        enumerable: false,
      },
    });

    expect(isNonEmptyRecord(testObject)).toBe(false);
  });

  it('should return true for an object with non-enumerable properties using "ownProperties" tester', () => {
    const testObject = Object.create(Object.prototype, {
      testProperty: {
        value: 'test',
        enumerable: false,
      },
    });

    expect(isNonEmptyRecord(testObject, 'ownProperties')).toBe(true);
  });

  it('should return false for null or undefined', () => {
    expect(isNonEmptyRecord(null)).toBe(false);
    expect(isNonEmptyRecord(undefined)).toBe(false);
  });

  it('should return false for function with properties', () => {
    const test = () => {};
    test.testProperty = 'test';

    expect(isNonEmptyRecord(test)).toBe(false);
  });

});
