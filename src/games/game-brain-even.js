import generateRandomNumber from '../utils/generateRandomNumber.js';

export const ANNOUNCEMENT = 'Answer "yes" if the number is even, otherwise answer "no".';
const NUMBER_MIN = 1;
const NUMBER_MAX = 100;

const isEven = (a) => a % 2 === 0;

const gameBrainEven = () => {
  const a = generateRandomNumber(NUMBER_MIN, NUMBER_MAX);

  const answer = isEven(a) ? 'yes' : 'no';

  return { question: a, answer };
};

export default gameBrainEven;
