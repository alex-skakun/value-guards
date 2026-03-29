import { isNonPresent } from './isNonPresent';

export function isPresent<T>(value: T | undefined | null): value is NonNullable<T> {
  return !isNonPresent(value);
}

/**
 * @deprecated use isPresent(). isDefined() will be removed in next major release.
 */
export const isDefined = isPresent;
