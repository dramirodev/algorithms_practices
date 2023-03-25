import {highAndLow} from "../highest_and_lowest/highest_and_lowest";

describe("highAndLow", () => {
  it("Test 1", () => {
    expect(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")).toEqual("42 -9");
  });
  it("Test 2", () => {
    expect(highAndLow("1 2 3")).toEqual("3 1");
  });
});