export function same(list1: number[], list2: number[]): boolean {
  if(list1.length != list2.length){
    return false;
  }

  for (let i = 0; i < list1.length; i++) {
    let correctIndex = list2.indexOf(Math.pow(list1[i], 2));
    if(correctIndex === -1){
      return false;
    }
    list2.splice(correctIndex, 1)
  }

  return true;
}

/**
 * More complex but better performance.
 * Nested loops always have worse performance than single loops.
 */
export function sameBetterPerformance(list1: number[], list2: number[]): boolean {
  if(list1.length !== list2.length){
    return false;
  }

  let frequencyCounter1: Record<number, number> ={};
  let frequencyCounter2: Record<number, number> ={};

  for(let val of list1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1;
  }

  for(let val of list2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1;
  }

  for(let key in frequencyCounter1){
    const squaredKey = Math.pow(Number(key), 2);
    if(!(squaredKey in frequencyCounter2)){
      return false
    }

    if(frequencyCounter1[squaredKey] !== frequencyCounter1[key]){
      return false
    }
  }

  return true;
}