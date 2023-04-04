import {searchArray} from "../indexOF-array-in-array/indexOf-array-in-array";

describe("searchArray", () => {
  it("should return the index of the array in the array or thrown an error", () => {
    expect(searchArray([[1, 2], [3, 4]], [1, 2])).toEqual(0);
    expect(searchArray([[1, 2], [3, 4]], [3, 4])).toEqual(1);
    expect(searchArray([[1, 2], [3, 4]], [3, 5])).toEqual(-1);
    expect(() => searchArray([[1, 2], [3, 4]], [1])).toThrow('Error');
    expect(() => searchArray([[1, 2], [3, 4]], [1, 2, 3])).toThrow('Error');
  });
});