export function isConstructor<TFunction>(fn: TFunction) {
  return !!fn?.['prototype']?.constructor;
}
