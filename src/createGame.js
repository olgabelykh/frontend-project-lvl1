import readlineSync from 'readline-sync';

const DEFAULT_QUESTIONS_COUNT = 3;

const createPlay = (createRound) => {
  const play = (questionsCount = DEFAULT_QUESTIONS_COUNT) => {
    if (questionsCount === 0) {
      return true;
    }

    const { question, answer: correctAnswer } = createRound();
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

export default (createRound, announcement) => () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ').trim();
  console.log(`Hello, ${name}!`);

  console.log(announcement);

  const play = createPlay(createRound);
  const isWinner = play();
  if (isWinner) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
