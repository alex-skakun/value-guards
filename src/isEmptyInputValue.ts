export function isEmptyInputValue(value: any): boolean {
  if (value instanceof Date) {
    return Number.isNaN(value.getTime());
  }

  switch (typeof value) {
  case 'boolean':
    return false;
  case 'number':
    return !Number.isFinite(value);
  default:
    return !value;
  }
}
