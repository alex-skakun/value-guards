export function isEmptyArray(value: any): value is [] {
  return Array.isArray(value) && value.length === 0;
}
