import { isEmptyRecord } from './isEmptyRecord';


describe('isEmptyRecord()', () => {

  it('should return true for empty object', () => {
    expect(isEmptyRecord({})).toBe(true);
  });

  it('should return false for non-empty object', () => {
    expect(isEmptyRecord({ testProperty: 'test' })).toBe(false);
  });

  it('should return true for an object without prototype', () => {
    const testObject = Object.create(null);

    expect(isEmptyRecord(testObject)).toBe(true);
  });

  it('should return true for an object with non-enumerable properties', () => {
    const testObject = Object.create(Object.prototype, {
      testProperty: {
        value: 'test',
        enumerable: false,
      },
    });

    expect(isEmptyRecord(testObject)).toBe(true);
  });

  it('should return false for an object with non-enumerable properties using "ownProperties" tester', () => {
    const testObject = Object.create(Object.prototype, {
      testProperty: {
        value: 'test',
        enumerable: false,
      },
    });

    expect(isEmptyRecord(testObject, 'ownProperties')).toBe(false);
  });

  it('should return false for null or undefined', () => {
    expect(isEmptyRecord(null)).toBe(false);
    expect(isEmptyRecord(undefined)).toBe(false);
  });

  it('should return false for function with properties', () => {
    const test = () => {};
    test.testProperty = 'test';

    expect(isEmptyRecord(test)).toBe(false);
  });

});
