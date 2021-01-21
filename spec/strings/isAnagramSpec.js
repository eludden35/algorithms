const { isAnagram } = require("../../strings/isAnagram");
const argFormatter = require("../helpers/argFormatter");

describe("isAnagram", () => {
  const strA1 = "yes";
  const strB1 = "eys";
  const expected1 = true;

  const strA2 = "yes";
  const strB2 = "eYs";
  const expected2 = true;

  const strA3 = "no";
  const strB3 = "noo";
  const expected3 = false;

  const strA4 = "silent";
  const strB4 = "listen";
  const expected4 = true;

  const testCases = [
    { arguments: [strA1, strB1], expected: expected1 },
    { arguments: [strA2, strB2], expected: expected2 },
    { arguments: [strA3, strB3], expected: expected3 },
    { arguments: [strA4, strB4], expected: expected4 },
  ];

  it("should return whether or not the 1st given string is an anagram of the 2nd.", () =>
    testCases.forEach(({ arguments, expected }) =>
      expect(isAnagram(...arguments))
        .withContext(argFormatter(isAnagram, arguments))
        .toEqual(expected)
    ));
});