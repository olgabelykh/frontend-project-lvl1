import readlineSync from 'readline-sync';

const createPlay = (game) => {
  const play = function play(questionCnt = 3) {
    if (questionCnt === 0) {
      return true;
    }

    const [question, correctAnswer] = game();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ').trim();

    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      return false;
    }

    console.log('Correct!');
    return play(questionCnt - 1);
  };

  return play;
};

const gamePlayer = (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ').trim();
  console.log(`Hello, ${name}!`);

  console.log(game.announcement);

  const play = createPlay(game);
  const isWinner = play();
  if (isWinner) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default gamePlayer;
