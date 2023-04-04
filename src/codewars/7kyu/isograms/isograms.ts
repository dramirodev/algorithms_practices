export function isograms(str: string){
  const strToArray = str.toLocaleLowerCase().split('');
  const listWithoutDoubles = new Set(strToArray);

  return listWithoutDoubles.size === str.length;
}