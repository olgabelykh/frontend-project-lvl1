import generateRandomNumber from '../utils/generateRandomNumber.js';

export const ANNOUNCEMENT = 'Find the greatest common divisor of given numbers.';
const NUMBER_MIN = 1;
const NUMBER_MAX = 100;

const calculateGcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return calculateGcd(b, a % b);
};

const gameBrainGcd = () => {
  const a = generateRandomNumber(NUMBER_MIN, NUMBER_MAX);
  const b = generateRandomNumber(NUMBER_MIN, NUMBER_MAX);

  const question = `${a} ${b}`;
  const answer = String(calculateGcd(a, b));

  return { question, answer };
};

export default gameBrainGcd;
