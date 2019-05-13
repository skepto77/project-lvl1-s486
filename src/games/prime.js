import { runGame, getRandomInt } from '..';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (value) => {
  let result = (value < 2) ? 'no' : 'yes';
  for (let i = 2; i < value; i += 1) {
    if (value % i === 0) {
      result = 'no';
    }
  }
  return result;
};

const getDataGame = () => {
  const value = getRandomInt();
  const currentAnswer = isPrime(value);
  const question = `${value}`;
  return [question, currentAnswer];
};

export default () => runGame(gameRules, getDataGame);
