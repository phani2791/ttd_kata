export class Calculator {
  add(input: string): number {
    const numberStrings = input.split(",");
    const numbers = numberStrings
      .map((numberString) => parseFloat(numberString.trim()))
      .filter((number) => !isNaN(number));
    console.log(numbers);

    if (numbers.length == 0) {
      throw new Error(
        "Provide valid string of numbers separated by commas"
      );
    }
    if (numbers.length == 1) {
      throw new Error("Provide at least two numbers");
    }
    const sum = numbers.reduce((sum, number) => sum + number, 0);
    return sum;
  }
}
