export function isConstructor<TFunction>(fn: TFunction): boolean {
  return !!fn?.['prototype']?.constructor;
}
