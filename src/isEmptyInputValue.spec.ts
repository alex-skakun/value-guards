import { isEmptyInputValue } from './isEmptyInputValue';


describe('isEmptyInputValue()', () => {

  it('should return false for any boolean', () => {
    expect(isEmptyInputValue(true)).toBe(false);
    expect(isEmptyInputValue(false)).toBe(false);
  });

  it('should return false for finite numbers', () => {
    expect(isEmptyInputValue(0)).toBe(false);
    expect(isEmptyInputValue(1)).toBe(false);
    expect(isEmptyInputValue(-1)).toBe(false);
  });

  it('should return true for NaN', () => {
    expect(isEmptyInputValue(NaN)).toBe(true);
  });

  it('should return true for any Infinity', () => {
    expect(isEmptyInputValue(Infinity)).toBe(true);
    expect(isEmptyInputValue(-Infinity)).toBe(true);
  });

  it('should return true for empty string', () => {
    expect(isEmptyInputValue('')).toBe(true);
  });

  it('should return false for non-empty string', () => {
    expect(isEmptyInputValue('test')).toBe(false);
  });

  it('should return true for undefined or null', () => {
    expect(isEmptyInputValue(undefined)).toBe(true);
    expect(isEmptyInputValue(null)).toBe(true);
  });

  it('should return false for empty record or array', () => {
    expect(isEmptyInputValue({})).toBe(false);
    expect(isEmptyInputValue([])).toBe(false);
  });

});
