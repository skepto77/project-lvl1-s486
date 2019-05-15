import runGame from '..';
import getRandomInt from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (value) => {
  if (value < 2) return false;
  for (let i = 2; i < value; i += 1) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const question = getRandomInt();
  const currentAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, currentAnswer];
};

export default () => runGame(gameDescription, getGameData);
