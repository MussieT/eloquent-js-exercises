const { sum, range } = require("./sum-of-range");

test("should return 1 + 2 as 3", () => {
  expect(sum([1, 2])).toBe(3);
});

test("should return range of 5 elements", () => {
  expect(range(6, 10)).toEqual([6, 7, 8, 9, 10]);
});
