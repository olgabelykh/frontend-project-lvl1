import randomNumber from '../utils/randomNumber.js';
import primes from '../utils/math/primes.js';
import isPrime from '../utils/math/isPrime.js';

const randomPrime = () => {
  const position = randomNumber(0, primes.length - 1);
  return primes[position];
};

const randomNum = () => {
  const min = primes[0];
  const max = primes[primes.length - 1];
  return randomNumber(min, max);
};

const choiceMapping = {
  1: randomPrime,
  2: randomNum,
};

const brainPrime = () => {
  const choice = randomNumber(1, 2);
  const num = choiceMapping[choice]();
  const answer = isPrime(num) ? 'yes' : 'no';

  return [num, answer];
};

brainPrime.announcement = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default brainPrime;
