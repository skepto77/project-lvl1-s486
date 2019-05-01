import readlineSync from 'readline-sync';

export const numberOfRounds = 3;

export const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min)) + min;

export const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export const runGame = (rules, question, trueAnswer) => {
  console.log(`Welcome to the Brain Games!\n${rules}.\n`);
  const userName = getName();
  // console.log(value);
  // console.log(trueAnswer);
  for (let i = 0; i < numberOfRounds; i += 1) {
    console.log(`Question: ${question[i]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (trueAnswer[i] === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer[i]}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
