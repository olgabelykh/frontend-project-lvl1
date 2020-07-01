import randomNumber from '../utils/randomNumber.js';
import isEven from '../utils/math/isEven.js';

const brainEven = () => {
  const num = randomNumber(1, 100);
  const answer = isEven(num) ? 'yes' : 'no';

  return [num, answer];
};

brainEven.announcement = 'Answer "yes" if the number is even, otherwise answer "no".';

export default brainEven;
