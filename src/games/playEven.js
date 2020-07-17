import getRandomNumber from '../utils/getRandomNumber.js';
import createGame from '../createGame.js';

export const ANNOUNCEMENT = 'Answer "yes" if the number is even, otherwise answer "no".';
const NUMBER_MIN = 1;
const NUMBER_MAX = 100;

const isEven = (a) => a % 2 === 0;

const createRound = () => {
  const number = getRandomNumber(NUMBER_MIN, NUMBER_MAX);

  const answer = isEven(number) ? 'yes' : 'no';

  return { question: String(number), answer };
};

export default createGame(createRound, ANNOUNCEMENT);
