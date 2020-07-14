import getRandomNumber from '../utils/getRandomNumber.js';

export const ANNOUNCEMENT = 'What is the result of the expression?';
const NUMBER_MIN = 1;
const NUMBER_MAX = 100;

const operations = {
  '*': (a, b) => a * b,
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
};

export default () => {
  const availableOperators = Object.keys(operations);
  const operatorIndex = getRandomNumber(0, availableOperators.length - 1);
  const operator = availableOperators[operatorIndex];
  const calc = operations[operator];

  const number1 = getRandomNumber(NUMBER_MIN, NUMBER_MAX);
  const number2 = getRandomNumber(NUMBER_MIN, NUMBER_MAX);

  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calc(number1, number2));

  return { question, answer };
};
