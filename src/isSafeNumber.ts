import { isFiniteNumber } from './isFiniteNumber';

export function isSafeNumber(value: unknown): value is number {
  return isFiniteNumber(value) && -Number.MAX_VALUE <= value && value <= Number.MAX_VALUE;
}
