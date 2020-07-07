import randomNumber from '../utils/randomNumber.js';

const PROGRESSION_SIZE = 10;
const PROGRESSION_FIRST_NUMBER_MIN = 1;
const PROGRESSION_FIRST_NUMBER_MAX = 10;
const PROGRESSION_DELTA_MIN = 1;
const PROGRESSION_DELTA_MAX = 3;

const createArithmeticProgression = (a1, n, d) => {
  const res = [];
  for (let i = 0; i < n; i += 1) {
    const num = a1 + (i - 1) * d;
    res.push(num);
  }
  return res;
};

const randomArithmeticProgression = () => {
  const d = randomNumber(PROGRESSION_DELTA_MIN, PROGRESSION_DELTA_MAX);
  const a1 = randomNumber(PROGRESSION_FIRST_NUMBER_MIN, PROGRESSION_FIRST_NUMBER_MAX);
  return createArithmeticProgression(a1, PROGRESSION_SIZE, d);
};

const randomPosition = () => {
  const positionMin = 0;
  const positionMax = PROGRESSION_SIZE - 1;
  return randomNumber(positionMin, positionMax);
};

const brainProgession = () => {
  const progression = randomArithmeticProgression();
  const position = randomPosition();
  const answer = String(progression[position]);
  progression[position] = '..';
  const question = progression.reduce((str, num) => `${str} ${num}`, '');

  return [question, answer];
};

brainProgession.announcement = 'What number is missing in the progression?';

export default brainProgession;
