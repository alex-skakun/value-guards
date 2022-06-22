import { isEmptyInputValue } from './isEmptyInputValue';


export function isNonEmptyInputValue(value: unknown): boolean {
  return !isEmptyInputValue(value);
}
