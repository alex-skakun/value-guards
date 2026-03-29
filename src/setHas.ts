export type ConfirmedKeySet<Value> = {
  has(k: Value): true;
  delete(k: Value): true;
};

export function setHas<Value, const SpecialValue extends Value>(
  set: Set<Value>,
  value: SpecialValue,
): set is ConfirmedKeySet<SpecialValue> & typeof set {
  return set.has(value);
}
