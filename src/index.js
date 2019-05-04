import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const getRandomInt = (min = 1, max = 50) => Math.floor(Math.random() * (max - min)) + min;

const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const runGame = (gameRules, getDataGame) => {
  console.log(`Welcome to the Brain Games!\n${gameRules}\n`);
  const userName = getName();
  for (let i = 1; i <= numberOfRounds; i += 1) {
    const data = getDataGame();
    console.log(`Question: ${data.question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(data.currentAnswer) === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${String(data.currentAnswer)}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { getRandomInt, getName, runGame };
