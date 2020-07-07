import randomNumber from '../utils/randomNumber.js';

const NUMBER_MIN = 1;
const NUMBER_MAX = 5000;

const isPrime = (num, divisor = num - 1) => {
  if (divisor === 1) {
    return true;
  }

  if (num % divisor === 0) {
    return false;
  }

  return isPrime(num, divisor - 1);
};

const brainPrime = () => {
  const num = randomNumber(NUMBER_MIN, NUMBER_MAX);
  const answer = isPrime(num) ? 'yes' : 'no';

  return [num, answer];
};

brainPrime.announcement = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default brainPrime;
