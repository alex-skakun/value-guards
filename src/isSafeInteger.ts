export function isSafeInteger(value: unknown): value is number {
  return Number.isSafeInteger(value);
}
