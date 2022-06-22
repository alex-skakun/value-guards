export function getObjectTester(
  testBy: 'keys' | 'ownProperties'
): keyof Pick<ObjectConstructor, 'keys' | 'getOwnPropertyNames'> {
  switch (testBy) {
  case 'ownProperties':
    return 'getOwnPropertyNames';
  case 'keys':
  default:
    return 'keys';
  }
}
