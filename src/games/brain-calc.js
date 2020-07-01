import randomNumber from '../utils/randomNumber.js';
import calc, { operations } from '../utils/math/calc.js';

const brainCalc = () => {
  const operation = operations[randomNumber(0, 2)];
  const num1 = randomNumber(0, 10);
  const num2 = randomNumber(0, 10);

  const question = `${num1} ${operation} ${num2}`;
  const answer = String(calc(num1, num2, operation));

  return [question, answer];
};

brainCalc.announcement = 'What is the result of the expression?';

export default brainCalc;
