import getRandomNumber from '../utils/getRandomNumber.js';

export const ANNOUNCEMENT = 'What number is missing in the progression?';
const PROGRESSION_SIZE = 10;
const PROGRESSION_INITIAL_TERM_MIN = 1;
const PROGRESSION_INITIAL_TERM_MAX = 10;
const PROGRESSION_DIFFERENCE_MIN = 1;
const PROGRESSION_DIFFERENCE_MAX = 3;

const getArithmeticProgression = (initialTerm, termsCount, difference) => {
  const progression = [];
  for (let i = 0; i < termsCount; i += 1) {
    const term = initialTerm + (i - 1) * difference;
    progression.push(term);
  }
  return progression;
};

export default () => {
  const initialTerm = getRandomNumber(PROGRESSION_INITIAL_TERM_MIN, PROGRESSION_INITIAL_TERM_MAX);
  const difference = getRandomNumber(PROGRESSION_DIFFERENCE_MIN, PROGRESSION_DIFFERENCE_MAX);
  const progression = getArithmeticProgression(initialTerm, PROGRESSION_SIZE, difference);

  const positionToMask = getRandomNumber(0, progression.length - 1);

  const answer = String(progression[positionToMask]);
  progression[positionToMask] = '..';
  const question = progression.join(' ');

  return { question, answer };
};
