export class Calculator {
  add(input: string): number {
    const numberStrings = input.split(",");
    const numbers = numberStrings
      .map((numberString) => parseFloat(numberString.trim()))
      .filter((number) => !isNaN(number));
    const sum = numbers.reduce((sum, number) => sum + number, 0);
    return sum;
  }
}
