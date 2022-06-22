import { getObjectTester } from './utils/getObjectTester';

export function isEmptyRecord(
  value: unknown,
  testBy: 'keys' | 'ownProperties' = 'keys',
): value is {} {
  return !!value && typeof value === 'object' && !Object[getObjectTester(testBy)](value).length;
}
