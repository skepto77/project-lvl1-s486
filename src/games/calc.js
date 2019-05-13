import { runGame, getRandomInt } from '..';

const gameRules = 'What is the result of the expression?';

const getDataGame = () => {
  const numberOne = getRandomInt();
  const numberTwo = getRandomInt();
  const operators = ['+', '-', '*'];
  const expression = [numberOne + numberTwo, numberOne - numberTwo, numberOne * numberTwo];
  const getRandomOperator = getRandomInt(0, operators.length - 1);
  const question = `${numberOne} ${operators[getRandomOperator]} ${numberTwo}`;
  const currentAnswer = String(expression[getRandomOperator]);
  return [question, currentAnswer];
};

export default () => runGame(gameRules, getDataGame);
