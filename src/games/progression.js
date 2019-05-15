import runGame from '..';
import getRandomInt from '../utils';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (element, step, length) => {
  const progression = [];
  let value = element;
  for (let i = 0; i < length; i += 1) {
    progression.push(value);
    value += step;
  }
  return progression;
};

const getGameData = () => {
  const firstElement = getRandomInt();
  const progressionStep = getRandomInt();
  const progression = getProgression(firstElement, progressionStep, progressionLength);
  const randomPosition = getRandomInt(0, progressionLength - 1);
  const currentAnswer = String(progression[randomPosition]);
  progression.splice(randomPosition, 1, '..');
  const question = `${progression.join(' ')}`;
  return [question, currentAnswer];
};

export default () => runGame(gameDescription, getGameData);
