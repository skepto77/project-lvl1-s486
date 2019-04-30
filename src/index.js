import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min)) + min;

const rules = 'Answer "yes" if number even otherwise answer "no".';

export const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export const runGame = () => {
  console.log(`Welcome to the Brain Games!\n${rules}.\n`);
  const userName = getName();
  for (let count = 0; count < numberOfRounds; count += 1) {
    const value = getRandomInt();
    console.log(`Question: ${value}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isEven = (value % 2 === 0);
    const trueAnswer = (isEven) ? 'yes' : 'no';
    if ((isEven && userAnswer === trueAnswer) || (!isEven && userAnswer === trueAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
