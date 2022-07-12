import { isEmptyArray } from './isEmptyArray';


describe('isEmptyArray()', () => {

  it('should return true for empty array', () => {
    expect(isEmptyArray([])).toBe(true);
  });

  it('should return false for non-empty array', () => {
    expect(isEmptyArray([1])).toBe(false);
  });

  it('should return false for array-like object', () => {
    expect(isEmptyArray({ length: 1 })).toBe(false);
    expect(isEmptyArray({ length: 0 })).toBe(false);
  });

});
