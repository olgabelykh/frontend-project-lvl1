import generateRandomNumber from '../utils/generateRandomNumber.js';

export const ANNOUNCEMENT = 'What number is missing in the progression?';
const PROGRESSION_SIZE = 10;
const PROGRESSION_INITIAL_TERM_MIN = 1;
const PROGRESSION_INITIAL_TERM_MAX = 10;
const PROGRESSION_DIFFERENCE_MIN = 1;
const PROGRESSION_DIFFERENCE_MAX = 3;

const POSITION_MASK = '..';

const generateArithmeticProgression = (initialTerm, termsCount, difference) => {
  const res = [];
  for (let i = 0; i < termsCount; i += 1) {
    const term = initialTerm + (i - 1) * difference;
    res.push(term);
  }
  return res;
};

const brainProgession = () => {
  const initialTerm = generateRandomNumber(
    PROGRESSION_INITIAL_TERM_MIN,
    PROGRESSION_INITIAL_TERM_MAX,
  );
  const difference = generateRandomNumber(PROGRESSION_DIFFERENCE_MIN, PROGRESSION_DIFFERENCE_MAX);
  const progression = generateArithmeticProgression(initialTerm, PROGRESSION_SIZE, difference);

  const positionToMask = generateRandomNumber(0, progression.length - 1);

  const answer = String(progression[positionToMask]);
  progression[positionToMask] = POSITION_MASK;
  const question = progression.reduce((str, num) => `${str} ${num}`, '');

  return [question, answer];
};

export default brainProgession;
