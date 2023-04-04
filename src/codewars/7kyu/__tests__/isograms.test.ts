import { isIsogram } from '../isograms/isograms';

describe('isIsogram', () => {
  it('should return true if the string is an isogram', () => {
    expect(isIsogram('Dermatoglyphics')).toEqual(true);
    expect(isIsogram('isogram')).toEqual(true);
    expect(isIsogram('aba')).toEqual(false);
    expect(isIsogram('moOse')).toEqual(false);
    expect(isIsogram('isIsogram')).toEqual(false);
    expect(isIsogram('')).toEqual(true);
  });
});
