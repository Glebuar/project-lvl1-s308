import readlineSync from 'readline-sync';

const hello = () => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${userName}!\n`);
};
export default hello;
