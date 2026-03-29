import { isSafeInteger } from './isSafeInteger';

export function isNonNegativeSafeInteger(value: unknown): value is number {
  return isSafeInteger(value) && value >= 0;
}
