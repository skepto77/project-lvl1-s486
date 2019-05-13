import { runGame, getRandomInt } from '..';

const gameRules = 'What number is missing in the progression?';

const numberOfElements = 10;

const getProgression = () => {
  const progression = [];
  let progressionValue = getRandomInt();
  const progressionСounter = getRandomInt();
  for (let i = 0; i < numberOfElements; i += 1) {
    progression.push(progressionValue);
    progressionValue += progressionСounter;
  }
  return progression;
};

const getDataGame = () => {
  const progression = getProgression();
  const randomPosition = getRandomInt(0, numberOfElements - 1);
  const currentAnswer = String(progression[randomPosition]);
  progression.splice(randomPosition, 1, '..');
  const question = `${progression.join(' ')}`;
  return [question, currentAnswer];
};

export default () => runGame(gameRules, getDataGame);
