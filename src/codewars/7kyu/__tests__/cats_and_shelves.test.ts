import {catsAndShelves} from "../cats_and_shelves/cats_and_shelves";

describe("Mew tests", function() {
  it("Start 1, finish 5",  () => {
    expect(catsAndShelves(1, 5)).toEqual(2);
  } );
  it("Start 3, finish 3",  () => expect(catsAndShelves(3, 3)).toEqual(0) );
  it("Start 2, finish 4",  () => expect(catsAndShelves(2, 4)).toEqual(2));
});
