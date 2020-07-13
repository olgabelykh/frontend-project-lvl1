import generateRandomNumber from '../utils/generateRandomNumber.js';

export const ANNOUNCEMENT = 'What is the result of the expression?';
const NUMBER_MIN = 1;
const NUMBER_MAX = 100;

const operations = {
  '*': (a, b) => a * b,
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
};

const brainCalc = () => {
  const availableOperators = Object.keys(operations);
  const operatorIndex = generateRandomNumber(0, availableOperators.length - 1);
  const operator = availableOperators[operatorIndex];
  const calc = operations[operator];

  const a = generateRandomNumber(NUMBER_MIN, NUMBER_MAX);
  const b = generateRandomNumber(NUMBER_MIN, NUMBER_MAX);

  const question = `${a} ${operator} ${b}`;
  const answer = String(calc(a, b));

  return [question, answer];
};

export default brainCalc;
