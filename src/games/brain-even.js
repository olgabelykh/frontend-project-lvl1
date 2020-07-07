import randomNumber from '../utils/randomNumber.js';

const NUMBER_MIN = 1;
const NUMBER_MAX = 100;

const isEven = (num) => num % 2 === 0;

const brainEven = () => {
  const num = randomNumber(NUMBER_MIN, NUMBER_MAX);
  const answer = isEven(num) ? 'yes' : 'no';

  return [num, answer];
};

brainEven.announcement = 'Answer "yes" if the number is even, otherwise answer "no".';

export default brainEven;
