import generateRandomNumber from '../utils/generateRandomNumber.js';

export const ANNOUNCEMENT = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const NUMBER_MIN = 1;
const NUMBER_MAX = 5000;

const isPrime = (a) => {
  if (a <= 1) {
    return false;
  }

  const divisorMax = Math.floor(Math.sqrt(a));
  for (let divisor = 2; divisor <= divisorMax; divisor += 1) {
    if (a % divisor === 0) {
      return false;
    }
  }

  return true;
};

const gameBrainPrime = () => {
  const a = generateRandomNumber(NUMBER_MIN, NUMBER_MAX);

  const answer = isPrime(a) ? 'yes' : 'no';

  return { question: a, answer };
};

export default gameBrainPrime;
