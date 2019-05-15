import runGame from '..';
import getRandomInt from '../utils';

const gameDescription = 'What is the result of the expression?';

const operations = [
  { sign: '+', expression: (a, b) => a + b },
  { sign: '-', expression: (a, b) => a - b },
  { sign: '*', expression: (a, b) => a * b },
];

const getGameData = () => {
  const numberOne = getRandomInt();
  const numberTwo = getRandomInt();
  const randomOperation = getRandomInt(0, operations.length - 1);
  const { sign, expression } = operations[randomOperation];
  const currentAnswer = String(expression(numberOne, numberTwo));
  const question = `${numberOne} ${sign} ${numberTwo}`;
  return [question, currentAnswer];
};

export default () => runGame(gameDescription, getGameData);
