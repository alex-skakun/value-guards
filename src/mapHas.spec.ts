import { describe, expect, test } from 'bun:test';
import { mapHas } from './mapHas';

describe('mapHas()', () => {
  test('returns true when key is present in map', () => {
    const testMap = new Map().set('a', 1);

    expect(mapHas(testMap, 'a')).toBeTrue();
  });

  test('returns false when key is not present in map', () => {
    const testMap = new Map().set('a', 1);

    expect(mapHas(testMap, 'b')).toBeFalse();
  });
});
