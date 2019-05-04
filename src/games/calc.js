import { runGame, getRandomInt } from '..';

const gameRules = 'What is the result of the expression?';

const getDataGame = () => {
  const result = [];
  const operators = ['+', '-', '*'];
  const numberOne = getRandomInt();
  const numberTwo = getRandomInt();
  const expression = [numberOne + numberTwo, numberOne - numberTwo, numberOne * numberTwo];
  const getRandomOperator = Math.floor(Math.random() * operators.length);
  result.question = `${numberOne} ${operators[getRandomOperator]} ${numberTwo}`;
  result.currentAnswer = expression[getRandomOperator];
  return result;
};

runGame(gameRules, getDataGame);
export default getDataGame;
