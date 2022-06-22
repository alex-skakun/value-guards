export function isEmptyInputValue(value: unknown): boolean {
  switch (typeof value) {
  case 'boolean':
    return false;
  case 'number':
    return !Number.isFinite(value);
  default:
    return !value;
  }
}