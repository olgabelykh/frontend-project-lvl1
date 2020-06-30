import readlineSync from 'readline-sync';

const askName = () => readlineSync.question('May I have your name? ').trim();

export default askName;
