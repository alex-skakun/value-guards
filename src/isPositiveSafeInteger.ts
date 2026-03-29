import { isSafeInteger } from './isSafeInteger';

export function isPositiveSafeInteger(value: unknown): value is number {
  return isSafeInteger(value) && value > 0;
}
