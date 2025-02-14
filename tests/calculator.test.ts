import { Calculator } from "../src/calculator";

describe("Calculator", () => {
  let calculator: Calculator;
  const INVALID_STRING_MSG =
    "Provide valid string of numbers separated by commas";
  beforeEach(() => {
    calculator = new Calculator();
  });

  test("should add two numbers", () => {
    expect(calculator.add("1, 2")).toBe(3);
  });
  test("check for empty string", () => {
    expect(() => {
      calculator.add("");
    }).toThrow(INVALID_STRING_MSG);
  });

  test("check for empty values", () => {
    expect(() => {
      calculator.add(",,,");
    }).toThrow(INVALID_STRING_MSG);
  });

  test("check for min two numbers", () => {
    expect(() => {
      calculator.add("1,");
    }).toThrow("Provide at least two numbers");
  });
});
