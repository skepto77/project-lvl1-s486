import { runGame, getRandomInt } from '..';

const gameRules = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => ((b === 0) ? a : gcd(b, a % b));

const getDataGame = () => {
  const numberOne = getRandomInt();
  const numberTwo = getRandomInt();
  const currentAnswer = String(gcd(numberOne, numberTwo));
  const question = `${numberOne} ${numberTwo}`;
  return [question, currentAnswer];
};

export default () => runGame(gameRules, getDataGame);
