import {validAnagram} from "../problem-solving-patterns/frequency-counter/valid-anagram/valid-anagram";

describe('validAnagram', () => {
  it('should return true', () => {
    expect(validAnagram('aaz', 'zza')).toBe(false);
    expect(validAnagram('anagram', 'nagaram')).toBe(true);
    expect(validAnagram('rat', 'car')).toBe(false);
    expect(validAnagram('awesome', 'awesom')).toBe(false);
    expect(validAnagram('qwerty', 'qeywrt')).toBe(true);
    expect(validAnagram('texttwisttime', 'timetwisttext')).toBe(true);
  });
});