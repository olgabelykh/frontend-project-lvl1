import readlineSync from 'readline-sync';

const DEFAULT_QUESTIONS_COUNT = 3;

const createPlay = (game) => {
  const play = (questionsCount = DEFAULT_QUESTIONS_COUNT) => {
    if (questionsCount === 0) {
      return true;
    }

    const { question, answer: correctAnswer } = game();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ').trim();

    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      return false;
    }

    console.log('Correct!');
    return play(questionsCount - 1);
  };

  return play;
};

export default (game, announcement) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ').trim();
  console.log(`Hello, ${name}!`);

  console.log(announcement);

  const play = createPlay(game);
  const isWinner = play();
  if (isWinner) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
