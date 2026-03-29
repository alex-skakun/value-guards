export type ConfirmedKeyMap<Key, Value> = {
  has(k: Key): true;
  delete(k: Key): true;
  get(k: Key): Value;
}

export function mapHas<Key, Value, const SpecialKey extends Key>(
  map: Map<Key, Value>,
  key: SpecialKey,
): map is ConfirmedKeyMap<SpecialKey, Value> & typeof map {
  return map.has(key);
}
