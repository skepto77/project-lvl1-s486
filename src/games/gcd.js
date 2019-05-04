import { runGame, getRandomInt } from '..';

const gameRules = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => ((b === 0) ? a : gcd(b, a % b));

const getDataGame = () => {
  const numberOne = getRandomInt();
  const numberTwo = getRandomInt();
  const result = [];
  result.currentAnswer = gcd(numberOne, numberTwo);
  result.question = `${numberOne} ${numberTwo}`;
  return result;
};

runGame(gameRules, getDataGame);
export default getDataGame;
