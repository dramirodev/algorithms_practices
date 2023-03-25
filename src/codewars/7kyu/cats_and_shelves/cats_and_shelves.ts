export function catsAndShelves(start: number, finish: number) {
  if (start === finish) {
    return 0;
  }
  if((finish - start) % 3 === 0){
    return  (finish - start) / 3;
  }

  let jumps = 0;
  let diferencial = start;

  while(diferencial < finish){
    if((diferencial + 3) <= finish){
      diferencial +=3;

    }else if((diferencial + 1) <= finish){
      diferencial += 1
    }
    jumps++;
  }



  return jumps;
}


/**
 * Clever solution
 * export function solution(start: number, finish: number, difference: number = finish - start) {
 *   return Math.floor(difference / 3) + difference % 3;
 * }
 */