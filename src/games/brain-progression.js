import randomNumber from '../utils/randomNumber.js';

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
  const initialTerm = randomNumber(PROGRESSION_INITIAL_TERM_MIN, PROGRESSION_INITIAL_TERM_MAX);
  const difference = randomNumber(PROGRESSION_DIFFERENCE_MIN, PROGRESSION_DIFFERENCE_MAX);
  const progression = generateArithmeticProgression(initialTerm, PROGRESSION_SIZE, difference);

  const positionToMaskMin = 0;
  const positionToMaskMax = PROGRESSION_SIZE - 1;
  const positionToMask = randomNumber(positionToMaskMin, positionToMaskMax);

  const answer = String(progression[positionToMask]);
  progression[positionToMask] = POSITION_MASK;
  const question = progression.reduce((str, num) => `${str} ${num}`, '');

  return [question, answer];
};

export default brainProgession;
