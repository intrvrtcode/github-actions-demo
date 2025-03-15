const { add, subtract, multiply, divide, pow, mod } = require("./index");

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtracts 1 - 2 to equal -1", () => {
  expect(subtract(1, 2)).toBe(-1);
});

test("multiplies 1 * 2 to equal 2", () => {
  expect(multiply(1, 2)).toBe(2);
});

test("divides 1 / 2 to equal 0.5", () => {
  expect(divide(1, 2)).toBe(0.5);
});

test("raises 1 to the power of 2 to equal 1", () => {
  expect(pow(1, 2)).toBe(1);
});

test("gets the remainder of 1 % 2 to equal 1", () => {
  expect(mod(1, 2)).toBe(1);
});