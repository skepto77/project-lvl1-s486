import { runGame, getRandomInt } from '..';

const gameRules = 'What number is missing in the progression?';

const getDataGame = () => {
  const result = [];
  const numberOfElements = 10;
  const randomPosition = getRandomInt(0, numberOfElements);
  const currentAnswerTmp = [];
  let progressionValue = getRandomInt();
  const progressionСounter = getRandomInt();

  for (let i = 0; i < numberOfElements; i += 1) {
    currentAnswerTmp.push(progressionValue);
    progressionValue += progressionСounter;
  }

  result.currentAnswer = currentAnswerTmp[randomPosition];
  currentAnswerTmp.splice(randomPosition, 1, '..');
  result.question = `${currentAnswerTmp.join(' ')}`;

  return result;
};

runGame(gameRules, getDataGame);
export default getDataGame;
