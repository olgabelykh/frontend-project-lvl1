import randomNumber from '../utils/randomNumber.js';
import gcd from '../utils/math/gcd.js';

const brainGcd = () => {
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);

  const question = `${num1} ${num2}`;
  const answer = String(gcd(num1, num2));

  return [question, answer];
};

brainGcd.announcement = 'Find the greatest common divisor of given numbers.';

export default brainGcd;
