import { getObjectTester } from './utils/getObjectTester';

export function isNonEmptyRecord<K extends keyof any, V>(
  value: any,
  testBy: 'keys' | 'ownProperties' = 'keys',
): value is Record<K, V> {
  return !!value && typeof value === 'object' && Object[getObjectTester(testBy)](value).length > 0;
}
