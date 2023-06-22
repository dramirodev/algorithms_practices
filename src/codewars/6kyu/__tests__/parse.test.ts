import { parse } from '../parse/parse';

describe('parse', () => {
  it('should return correct array', () => {
    expect(parse('doidiisioo')).toEqual([-1, 2, 2]);
    expect(parse('iiisdoso')).toEqual([8, 64]);
    expect(parse('iiisxxxdoso')).toEqual([8, 64]);
    expect(parse('oodisioiidoo')).toEqual([0, 0, 1, 2, 2]);
    expect(parse('dsiosddsdoo')).toEqual([2, 3, 3]);
  });
});
