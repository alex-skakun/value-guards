import { NonPresent } from './types';

export function isNonPresent(value: unknown): value is NonPresent {
  return value === undefined || value === null;
}
