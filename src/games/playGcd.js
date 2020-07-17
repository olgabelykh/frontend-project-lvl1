import getRandomNumber from '../utils/getRandomNumber.js';
import createGame from '../createGame.js';

export const ANNOUNCEMENT = 'Find the greatest common divisor of given numbers.';
const NUMBER_MIN = 1;
const NUMBER_MAX = 100;

const calculateGcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return calculateGcd(b, a % b);
};

const createRound = () => {
  const number1 = getRandomNumber(NUMBER_MIN, NUMBER_MAX);
  const number2 = getRandomNumber(NUMBER_MIN, NUMBER_MAX);

  const question = `${number1} ${number2}`;
  const answer = String(calculateGcd(number1, number2));

  return { question, answer };
};

export default createGame(createRound, ANNOUNCEMENT);
