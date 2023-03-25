import {likes} from "../who-like-this/who-like-this";

describe('wholikethis', function () {
  it('should return correct text', function () {
    expect(likes([])).toBe('no one likes this');
    expect(likes(['Peter'])).toBe('Peter likes this');
    expect(likes(['Jacob', 'Alex'])).toBe('Jacob and Alex like this');
    expect(likes(['Max', 'John', 'Mark'])).toBe('Max, John and Mark like this');
    expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).toBe('Alex, Jacob and 2 others like this');
  });
});

describe('Random tests', function () {
  it('Tests', function () {
    // let names:string[]=[]
    let r = (l: number, c: string[] = [..."ABCDEFHIJKLMNOPQRSTUVWXYZabcdefhijklmnopqrstuvwxyzgG"]) =>
        c[Math.random() * 50 | 0].toUpperCase() + [...Array(l)].map(_ => c[Math.random() * c.length | 0]).join('');
    let T = (a: any[]) => {
      let l: number = a.length;
      let b: any = ` like${l < 2 ? 's' : ''} this`;
      let s: any[] = ['no one', '{s}', '{s} and {s}', '{s}, {s} and {s}', '{s}, {s} and {n} others'];
      return (s[Math.min(l, 4)] + b).replace(/{s}|{n}/g, (B: any) => B == '{s}' ? a.shift() : l - 2);
    };
    for (let i: number = 0; i < 100; i++) {
      let NA: string[] = Math.random() < .2 ? [] : r(Math.random() * 100 | 0).split(/g/i).map(c => c == ''
          ? r(Math.random() * 10 | 0) : c);
      let MA: string[] = NA.slice();
      // let EA:string[] = NA.slice();
      let re: string = T(MA);
      let ue: string = likes(NA);
      expect(ue).toBe(re);
    }

  });
});