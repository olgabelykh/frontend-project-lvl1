import randomNumber from '../utils/randomNumber.js';

const NUMBER_MIN = 1;
const NUMBER_MAX = 100;

const gcd = (num1, num2, divisor = Math.min(num1, num2)) => {
  const isGcd = num1 % divisor === 0 && num2 % divisor === 0;
  if (isGcd) {
    return divisor;
  }
  return gcd(num1, num2, divisor - 1);
};

const brainGcd = () => {
  const num1 = randomNumber(NUMBER_MIN, NUMBER_MAX);
  const num2 = randomNumber(NUMBER_MIN, NUMBER_MAX);

  const question = `${num1} ${num2}`;
  const answer = String(gcd(num1, num2));

  return [question, answer];
};

brainGcd.announcement = 'Find the greatest common divisor of given numbers.';

export default brainGcd;
