import randomNumber from '../utils/randomNumber.js';

const NUMBER_MIN = 1;
const NUMBER_MAX = 100;

const multiply = (num1, num2) => num1 * num2;
const addition = (num1, num2) => num1 + num2;
const subtraction = (num1, num2) => num1 - num2;

const operations = [
  ['*', multiply],
  ['+', addition],
  ['-', subtraction],
];

const randomOperation = () => {
  const operationIndexMin = 0;
  const operationIndexMax = operations.length - 1;

  const operationIndex = randomNumber(operationIndexMin, operationIndexMax);
  return operations[operationIndex];
};

const brainCalc = () => {
  const [operator, calc] = randomOperation();
  const num1 = randomNumber(NUMBER_MIN, NUMBER_MAX);
  const num2 = randomNumber(NUMBER_MIN, NUMBER_MAX);

  const question = `${num1} ${operator} ${num2}`;
  const answer = String(calc(num1, num2));

  return [question, answer];
};

brainCalc.announcement = 'What is the result of the expression?';

export default brainCalc;
