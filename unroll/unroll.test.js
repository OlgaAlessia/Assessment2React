const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });


  it("with matrix 1", function () {
    let square = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
    let output = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];

    const arr = unroll(square);
    expect(arr).toEqual(output);
  });


  it("with matrix 2", function () {
    let matrix = [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]];
    let output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    const arr = unroll(matrix);
    expect(arr).toEqual(output);
  });

  it("with matrix 3", function () {
    let smallerSquare = [["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]];
    let output = ["a", "b", "c", "f", "i", "h", "g", "d", "e"];

    const arr = unroll(smallerSquare);
    expect(arr).toEqual(output);
  });
});
