const { add } = require("./app");

test("add sums two numbers", () => {
  expect(add(2, 3)).toBe(5);
});
