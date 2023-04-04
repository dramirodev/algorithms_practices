export function searchArray(arrayToSearch: number[][], arrayToFind: number[]): number {
  throwException(arrayToFind);
  const arrayToFindString = arrayToFind.join('');
  const arrayToSearchString = arrayToSearch.map(item => {
    throwException(item);
    return item.join('');
  });

  return arrayToSearchString.indexOf(arrayToFindString);
}

function hasArrayTwoElement(array: number[]) {
  return array.length !== 2;
}

function throwException(item: number[]) {
  if (hasArrayTwoElement(item)) {
    throw 'Error';
  }
}