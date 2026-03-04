const { add, subtract, multiply, divide, modulo, power, squareRoot, calculate } = require("../calculator");

// -------------------------------------------------------
// Addition tests
// -------------------------------------------------------
describe("add", () => {
  test("adds two positive numbers (2 + 3 = 5)", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds negative numbers (-1 + -3 = -4)", () => {
    expect(add(-1, -3)).toBe(-4);
  });

  test("adds a positive and a negative number (5 + -2 = 3)", () => {
    expect(add(5, -2)).toBe(3);
  });

  test("adds zero to a number (7 + 0 = 7)", () => {
    expect(add(7, 0)).toBe(7);
  });

  test("adds decimal numbers (1.5 + 2.3 = 3.8)", () => {
    expect(add(1.5, 2.3)).toBeCloseTo(3.8);
  });
});

// -------------------------------------------------------
// Subtraction tests
// -------------------------------------------------------
describe("subtract", () => {
  test("subtracts two positive numbers (10 - 4 = 6)", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("subtracts resulting in a negative number (3 - 8 = -5)", () => {
    expect(subtract(3, 8)).toBe(-5);
  });

  test("subtracts negative numbers (-5 - -3 = -2)", () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  test("subtracts zero (9 - 0 = 9)", () => {
    expect(subtract(9, 0)).toBe(9);
  });

  test("subtracts decimal numbers (5.5 - 2.2 = 3.3)", () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

// -------------------------------------------------------
// Multiplication tests
// -------------------------------------------------------
describe("multiply", () => {
  test("multiplies two positive numbers (45 * 2 = 90)", () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test("multiplies by zero (100 * 0 = 0)", () => {
    expect(multiply(100, 0)).toBe(0);
  });

  test("multiplies negative numbers (-3 * -4 = 12)", () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  test("multiplies a positive and a negative number (6 * -3 = -18)", () => {
    expect(multiply(6, -3)).toBe(-18);
  });

  test("multiplies decimal numbers (2.5 * 4 = 10)", () => {
    expect(multiply(2.5, 4)).toBe(10);
  });
});

// -------------------------------------------------------
// Division tests
// -------------------------------------------------------
describe("divide", () => {
  test("divides two positive numbers (20 / 5 = 4)", () => {
    expect(divide(20, 5)).toBe(4);
  });

  test("divides resulting in a decimal (7 / 2 = 3.5)", () => {
    expect(divide(7, 2)).toBe(3.5);
  });

  test("divides negative numbers (-12 / -4 = 3)", () => {
    expect(divide(-12, -4)).toBe(3);
  });

  test("divides a negative by a positive (-10 / 2 = -5)", () => {
    expect(divide(-10, 2)).toBe(-5);
  });

  test("divides zero by a number (0 / 5 = 0)", () => {
    expect(divide(0, 5)).toBe(0);
  });

  test("throws error on division by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
  });
});

// -------------------------------------------------------
// calculate() integration tests
// -------------------------------------------------------
describe("calculate", () => {
  test("calculates addition with + operator", () => {
    expect(calculate(2, "+", 3)).toBe(5);
  });

  test("calculates subtraction with - operator", () => {
    expect(calculate(10, "-", 4)).toBe(6);
  });

  test("calculates multiplication with * operator", () => {
    expect(calculate(45, "*", 2)).toBe(90);
  });

  test("calculates division with / operator", () => {
    expect(calculate(20, "/", 5)).toBe(4);
  });

  test("throws error for division by zero via calculate", () => {
    expect(() => calculate(10, "/", 0)).toThrow("Division by zero is not allowed.");
  });

  test("throws error for unknown operator", () => {
    expect(() => calculate(1, "^", 2)).toThrow("Unknown operator '^'");
  });
});

// -------------------------------------------------------
// Modulo tests
// -------------------------------------------------------
describe("modulo", () => {
  test("returns remainder of two positive numbers (5 % 2 = 1)", () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test("returns zero when evenly divisible (10 % 5 = 0)", () => {
    expect(modulo(10, 5)).toBe(0);
  });

  test("handles negative dividend (-7 % 3 = -1)", () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test("handles negative divisor (7 % -3 = 1)", () => {
    expect(modulo(7, -3)).toBe(1);
  });

  test("handles decimal modulo (5.5 % 2 = 1.5)", () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });

  test("throws error on modulo by zero", () => {
    expect(() => modulo(10, 0)).toThrow("Modulo by zero is not allowed.");
  });
});

// -------------------------------------------------------
// Power (exponentiation) tests
// -------------------------------------------------------
describe("power", () => {
  test("raises base to positive exponent (2 ^ 3 = 8)", () => {
    expect(power(2, 3)).toBe(8);
  });

  test("raises base to zero exponent (5 ^ 0 = 1)", () => {
    expect(power(5, 0)).toBe(1);
  });

  test("raises base to negative exponent (2 ^ -2 = 0.25)", () => {
    expect(power(2, -2)).toBe(0.25);
  });

  test("raises zero to positive exponent (0 ^ 5 = 0)", () => {
    expect(power(0, 5)).toBe(0);
  });

  test("raises negative base to even exponent (-3 ^ 2 = 9)", () => {
    expect(power(-3, 2)).toBe(9);
  });

  test("raises negative base to odd exponent (-2 ^ 3 = -8)", () => {
    expect(power(-2, 3)).toBe(-8);
  });
});

// -------------------------------------------------------
// Square root tests
// -------------------------------------------------------
describe("squareRoot", () => {
  test("returns square root of a perfect square (√16 = 4)", () => {
    expect(squareRoot(16)).toBe(4);
  });

  test("returns square root of a non-perfect square (√2 ≈ 1.414)", () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142, 4);
  });

  test("returns zero for square root of zero (√0 = 0)", () => {
    expect(squareRoot(0)).toBe(0);
  });

  test("returns square root of a decimal (√0.25 = 0.5)", () => {
    expect(squareRoot(0.25)).toBe(0.5);
  });

  test("returns square root of a large number (√10000 = 100)", () => {
    expect(squareRoot(10000)).toBe(100);
  });

  test("throws error for square root of a negative number", () => {
    expect(() => squareRoot(-4)).toThrow("Square root of a negative number is not allowed.");
  });
});

// -------------------------------------------------------
// calculate() integration tests for new operations
// -------------------------------------------------------
describe("calculate - advanced operations", () => {
  test("calculates modulo with % operator (5 % 2 = 1)", () => {
    expect(calculate(5, "%", 2)).toBe(1);
  });

  test("calculates exponentiation with ** operator (2 ** 3 = 8)", () => {
    expect(calculate(2, "**", 3)).toBe(8);
  });

  test("calculates square root with sqrt operator (√16 = 4)", () => {
    expect(calculate(16, "sqrt")).toBe(4);
  });

  test("throws error for modulo by zero via calculate", () => {
    expect(() => calculate(10, "%", 0)).toThrow("Modulo by zero is not allowed.");
  });

  test("throws error for square root of negative via calculate", () => {
    expect(() => calculate(-9, "sqrt")).toThrow("Square root of a negative number is not allowed.");
  });
});
