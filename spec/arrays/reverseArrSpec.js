const { reverseArr } = require("../../arrays/reverseArr");
const argFormatter = require("../helpers/argFormatter");

describe("reverseArr", () => {
  const arr1 = [1, 2, 3];
  const expected1 = [3, 2, 1];

  const arr2 = ["a", "b"];
  const expected2 = ["b", "a"];

  const arr3 = ["a"];
  const expected3 = ["a"];

  const arr4 = [];
  const expected4 = [];

  const testCases = [
    { arguments: [arr1], expected: expected1 },
    { arguments: [arr2], expected: expected2 },
    { arguments: [arr3], expected: expected3 },
    { arguments: [arr4], expected: expected4 },
  ];

  testCases.forEach(({ arguments, expected }) => {
    const inputArr = arguments[0];
    const outputArr = reverseArr(inputArr);
    const formattedArgs = argFormatter(reverseArr, arguments);

    it("should reverse the given array in place and return the given array.", () => {
      expect(outputArr).withContext(formattedArgs).toEqual(expected);
    });

    it("should return the same array, not a new array.", () => {
      expect(inputArr).withContext(formattedArgs).toBe(outputArr);
    });
  });
});
