import { getObjectTester } from './utils/getObjectTester';

export function isEmptyRecord(value: any, testBy: 'keys' | 'ownProperties' = 'keys'): value is Record<never, never> {
  return !!value && typeof value === 'object' && !Object[getObjectTester(testBy)](value).length;
}
