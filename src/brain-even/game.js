import readlineSync from 'readline-sync';

import askName from '../askName.js';
import isEven from './isEven.js';
import generateNumber from './generateNumber.js';

const getCorrectAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const play = (questionCnt = 3) => {
  if (questionCnt === 0) {
    return true;
  }

  const num = generateNumber();
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ').trim();
  const correctAnswer = getCorrectAnswer(num);

  if (answer !== correctAnswer) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    return false;
  }

  console.log('Correct!');
  return play(questionCnt - 1);
};

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const result = play();
  if (result) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default game;
