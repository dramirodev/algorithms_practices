import { isograms} from "../isograms/isograms";

describe("isograms", () => {
  it("should return true if the string is an isogram", () => {
    expect(isograms("Dermatoglyphics")).toEqual(true);
    expect(isograms("isogram")).toEqual(true);
    expect(isograms("aba")).toEqual(false);
    expect(isograms("moOse")).toEqual(false);
    expect(isograms("isIsogram")).toEqual(false);
    expect(isograms("")).toEqual(true);
  });
});