import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const getRandomInt = (min = 1, max = 30) => Math.floor(Math.random() * (max - min + 1)) + min;

const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const runGame = (gameRules, getDataGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameRules}`);
  const userName = getName();
  for (let i = 1; i <= numberOfRounds; i += 1) {
    const [question, currentAnswer] = getDataGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (currentAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${currentAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { getRandomInt, getName, runGame };
