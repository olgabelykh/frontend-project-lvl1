import askName from './askName.js';

const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  console.log(`Hello, ${name}!`);
};

export default greetings;
