import randomNumber from '../utils/randomNumber.js';

const operations = ['*', '+', '-'];

const multiply = (num1, num2) => num1 * num2;
const addition = (num1, num2) => num1 + num2;
const subtraction = (num1, num2) => num1 - num2;

const calcMapping = {
  '*': multiply,
  '+': addition,
  '-': subtraction,
};

const brainCalc = () => {
  const operation = operations[randomNumber(0, 2)];
  const num1 = randomNumber(0, 10);
  const num2 = randomNumber(0, 10);

  const question = `${num1} ${operation} ${num2}`;
  const answer = String(calcMapping[operation](num1, num2));

  return [question, answer];
};

brainCalc.announcement = 'What is the result of the expression?';

export default brainCalc;
