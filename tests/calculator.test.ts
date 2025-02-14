import { Calculator, INVALID_STRING_MSG } from "../src/calculator";

describe("Calculator", () => {
  let calculator: Calculator;

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
    }).toThrow(INVALID_STRING_MSG);
  });

  test("check for space between two numbers", () => {
    expect(() => {
      calculator.add("1,,3,,4,,5,,");
    }).toThrow(INVALID_STRING_MSG);
  });
});
