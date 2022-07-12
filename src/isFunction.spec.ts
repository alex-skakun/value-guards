import { isFunction } from './isFunction';


describe('isFunction()', () => {

  it('should return false for non function', () => {
    expect(isFunction(null)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction([])).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction('test')).toBe(false);
    expect(isFunction(123)).toBe(false);
  });

  it('should return true for any function', () => {
    expect(isFunction(function() {})).toBe(true);
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(new Proxy((..._args: any[]) => {}, {
      apply: (target, thisArg, argArray) => {
        return target.apply(thisArg, argArray);
      }
    }))).toBe(true);
    expect(isFunction(new Proxy(function(..._args: any[]) {}, {
      apply: (target, thisArg, argArray) => {
        return target.apply(thisArg, argArray);
      }
    }))).toBe(true);
  });

});
