export function searchArray (arrayToSearch: number[][], arrayToFind: number[]): number {
  throwException(arrayToFind);
  const arrayToFindString = arrayToFind.join('');
  const arrayToSearchString = arrayToSearch.map(item => {
    throwException(item);
    return item.join('');
  });

  return arrayToSearchString.indexOf(arrayToFindString);
}

function hasArrayTwoElement (array: number[]): boolean {
  return array.length !== 2;
}

function throwException (item: number[]): void {
  if (hasArrayTwoElement(item)) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw 'Error';
  }
}
