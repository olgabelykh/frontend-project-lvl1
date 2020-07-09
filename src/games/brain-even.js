import randomNumber from '../utils/randomNumber.js';

export const ANNOUNCEMENT = 'Answer "yes" if the number is even, otherwise answer "no".';
const NUMBER_MIN = 1;
const NUMBER_MAX = 100;

const isEven = (a) => a % 2 === 0;

const brainEven = () => {
  const a = randomNumber(NUMBER_MIN, NUMBER_MAX);

  const question = a;
  const answer = isEven(a) ? 'yes' : 'no';

  return [question, answer];
};

export default brainEven;
