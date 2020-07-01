import randomNumber from '../utils/randomNumber.js';
import arithmeticProgression from '../utils/math/arithmeticProgression.js';
import createProgression from '../utils/createProgression.js';

const progression = createProgression(arithmeticProgression);
const PROGRESSION_SIZE = 10;

const brainProgession = () => {
  const d = randomNumber(1, 3);
  const a1 = randomNumber(1, 10);
  const seq = progression(a1, PROGRESSION_SIZE, d);

  const position = randomNumber(0, PROGRESSION_SIZE - 1);
  const answer = String(seq[position]);
  seq[position] = '..';
  const question = seq.reduce((str, num) => `${str} ${num}`, '');

  return [question, answer];
};

brainProgession.announcement = 'What number is missing in the progression?';

export default brainProgession;
