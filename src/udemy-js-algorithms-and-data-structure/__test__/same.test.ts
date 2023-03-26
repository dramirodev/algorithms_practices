import {same} from "../problem-solving-patterns/frequency-counter/same/same";


describe("Frequency counter - same", () => {
  it('must return true', () => expect(same([1, 2, 3], [4, 1, 9])).toBeTruthy());
  it('must return false', () => expect(same([1, 2, 3], [4, 1])).toBeFalsy());
  it('must return true', () => expect(same([1, 2, 1], [4, 4, 1])).toBeFalsy());
})