import runGame from '..';
import getRandomInt from '../utils';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = value => value % 2 === 0;

const getGameData = () => {
  const question = getRandomInt();
  const currentAnswer = isEven(question) ? 'yes' : 'no';
  return [question, currentAnswer];
};

export default () => runGame(gameDescription, getGameData);
