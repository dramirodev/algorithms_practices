# Description
An infinite number of shelves are arranged one above the other in a staggered fashion.
The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3 (the cat cannot climb on the shelf directly above its head),

## Input
Start and finish shelf numbers (always positive integers, finish no smaller than start)

## Task
Find the minimum number of jumps to go from start to finish

## Example
Start 1, finish 5, then answer is ``` 2 (1 => 4 => 5 or 1 => 2 => 5)```

## Solutions that I liked the most

```javascript
function catsAndShelves(start, finish) {
  return Math.ceil((finish - start) / 3);
}

export function solution(start: number, finish: number, difference: number = finish - start) {
  return difference <= 3 ? 1 : 1 + solution(start, finish - 3);
}
```