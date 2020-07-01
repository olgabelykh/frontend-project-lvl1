export const operations = ['*', '+', '-'];

const multiply = (num1, num2) => num1 * num2;
const addition = (num1, num2) => num1 + num2;
const subtraction = (num1, num2) => num1 - num2;

const calcMapping = {
  '*': multiply,
  '+': addition,
  '-': subtraction,
};

const calc = (num1, num2, operation) => calcMapping[operation](num1, num2);

export default calc;
