import randomNumber from '../utils/randomNumber.js';

export const ANNOUNCEMENT = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const NUMBER_MIN = 1;
const NUMBER_MAX = 5000;

const isPrime = (a) => {
  if (a < 2 || a % 2 === 0) {
    return false;
  }

  if (a === 2) {
    return true;
  }

  const max = Math.floor(Math.sqrt(a));
  for (let divisor = 3; divisor <= max; divisor += 1) {
    if (a % divisor === 0) {
      return false;
    }
  }

  return true;
};

const brainPrime = () => {
  const a = randomNumber(NUMBER_MIN, NUMBER_MAX);

  const question = a;
  const answer = isPrime(a) ? 'yes' : 'no';

  return [question, answer];
};

export default brainPrime;
