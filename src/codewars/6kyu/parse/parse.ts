export function parse(data: string): number[] {
  let initial: number = 0;
  const final: number[]= [];

  [...data].forEach(letter => {
    switch(letter) {
      case 'i':
        initial++;
        break;
      case 'd':
        initial--;
        break;
      case 's':
        initial = Math.pow(initial, 2);
        break;
      case 'o':
        final.push(initial);
        break;
    }
  })

  return final;
}
