export function isFalsy(value: boolean): value is false;
export function isFalsy(value: number): value is 0; // impossible yet to specify NaN
export function isFalsy(value: string): value is '';
export function isFalsy<T>(value: T | null | undefined): value is (null | undefined);
export function isFalsy(value: unknown): boolean {
  return !value;
}
