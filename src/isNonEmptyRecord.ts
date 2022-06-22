import { isEmptyRecord } from './isEmptyRecord';

export function isNonEmptyRecord<K extends string | symbol, V>(value: unknown): value is Record<K, V> {
  return !isEmptyRecord(value);
}
