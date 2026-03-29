import { describe, expect, test } from 'bun:test';
import { setHas } from './setHas';

describe('setHas()', () => {
  test('returns true when key is present in map', () => {
    const testSet = new Set().add('a');

    expect(setHas(testSet, 'a')).toBeTrue();
  });

  test('returns false when key is not present in map', () => {
    const testSet = new Set().add('a');

    expect(setHas(testSet, 'b')).toBeFalse();
  });
});
