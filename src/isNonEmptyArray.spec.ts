import { isNonEmptyArray } from './isNonEmptyArray';


describe('isNonEmptyArray()', () => {

  it('should return true for non-empty array', () => {
    expect(isNonEmptyArray([1])).toBe(true);
  });

  it('should return false for empty array', () => {
    expect(isNonEmptyArray([])).toBe(false);
  });

  it('should return false for array-like object', () => {
    expect(isNonEmptyArray({ length: 1 })).toBe(false);
    expect(isNonEmptyArray({ length: 0 })).toBe(false);
  });

});
