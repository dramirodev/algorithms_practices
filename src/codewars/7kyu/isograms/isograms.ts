export function isIsogram (str: string): boolean {
  const strToArray = str.toLocaleLowerCase().split('');
  const listWithoutDoubles = new Set(strToArray);

  return listWithoutDoubles.size === str.length;
}

/**
 * Cleaner solution:
 *
 * function isIsogram(str:string){
 * return new Set(str.toUpperCase()).size == str.length;
 * }
 */
