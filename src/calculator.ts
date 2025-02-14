export class Calculator {
  add(input: string): number {
    if (!/^-?\d+(\s*,\s*-?\d+)*$/.test(input)) {
      throw new Error(INVALID_STRING_MSG);
    }
    const numberStrings = input.split(",");
    const numbers = numberStrings
      .map((numberString) => parseFloat(numberString.trim()))
      .filter((number) => !isNaN(number));
    if (numbers.length == 1) {
      throw new Error("Provide at least two numbers");
    }
    const sum = numbers.reduce((sum, number) => sum + number, 0);
    return sum;
  }
}

export const INVALID_STRING_MSG =
  "Input string should contain only numbers separated by commas";
