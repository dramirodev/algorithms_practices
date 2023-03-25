import {charCount} from "../problem-solving-aproach/char-count";

describe('charCount function', function () {
  it('should return an object with the count of each character in the string', function () {
    expect(charCount('hello')).toEqual({ h: 1, e: 1, l: 2, o: 1 });
    expect(charCount('Hello hi')).toEqual({ h: 2, e: 1, l: 2, o: 1, i: 1 });
  });
});