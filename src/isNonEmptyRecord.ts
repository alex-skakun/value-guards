import { getObjectTester } from './utils/getObjectTester';

export function isNonEmptyRecord<Key extends keyof any, Value>(
  value: unknown,
  testBy: 'keys' | 'ownProperties' = 'keys',
): value is Record<Key, Value> {
  return !!value && typeof value === 'object' && Object[getObjectTester(testBy)](value).length > 0;
}
