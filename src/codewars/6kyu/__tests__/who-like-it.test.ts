import { likes } from '../who-like-this/who-like-this';

describe('wholikethis', function () {
  it('should return correct text', function () {
    expect(likes([])).toBe('no one likes this');
    expect(likes(['Peter'])).toBe('Peter likes this');
    expect(likes(['Jacob', 'Alex'])).toBe('Jacob and Alex like this');
    expect(likes(['Max', 'John', 'Mark'])).toBe('Max, John and Mark like this');
    expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).toBe('Alex, Jacob and 2 others like this');
  });
});

/**
 * Random tests
 * Let's generate random tests to check the function
 * This test is provided by the Codewars platform
 */

describe('Random tests', function () {
  it('Tests', function () {
    // let names:string[]=[]
    const generateString = (l: number, c: string[] = [...'ABCDEFHIJKLMNOPQRSTUVWXYZabcdefhijklmnopqrstuvwxyzgG']): string =>
      c[Math.random() * 50 | 0].toUpperCase() + [...Array(l)].map(_ => c[Math.random() * c.length | 0]).join('');
    const generateExpectResultMessage = (a: any[]): any => {
      const l: number = a.length;
      const b: string = ` like${l < 2 ? 's' : ''} this`;
      const s: string[] = ['no one', '{s}', '{s} and {s}', '{s}, {s} and {s}', '{s}, {s} and {n} others'];
      return (s[Math.min(l, 4)] + b).replace(/{s}|{n}/g, (B: any) => B === '{s}' ? a.shift() : l - 2);
    };
    for (let i: number = 0; i < 100; i++) {
      const functionInput: string[] = Math.random() < 0.2
        ? []
        : generateString(Math.random() * 100 | 0).split(/g/i).map(c => c === ''
          ? generateString(Math.random() * 10 | 0)
          : c);
      const MA: string[] = functionInput.slice();
      // let EA:string[] = functionInput.slice();
      const messages: string = generateExpectResultMessage(MA);
      const result: string = likes(functionInput);
      expect(result).toBe(messages);
    }
  });
});
