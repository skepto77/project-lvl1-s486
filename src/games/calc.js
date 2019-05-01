import { runGame, getRandomInt, numberOfRounds } from '../index';

export const rules = 'What is the result of the expression?';

export const GameCalcBarain = (question = [], trueAnswer = []) => {
  const operators = ['+', '-', '*'];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const numberOne = getRandomInt();
    const numberTwo = getRandomInt();
    const expression = [numberOne + numberTwo, numberOne - numberTwo, numberOne * numberTwo];
    const getRandomOperator = Math.floor(Math.random() * operators.length);
    question.push(`${numberOne} ${operators[getRandomOperator]} ${numberTwo}`);
    trueAnswer.push(String(expression[getRandomOperator]));
    // const getRandomOperator = Math.floor(Math.random() * operators.length);
    // question.push(`${getRandomInt()} ${operators[getRandomOperator]} ${getRandomInt()}`);
    // const tmp = question[i].replace(/[^-()\d/*+.]/g, '');
    // trueAnswer[i] = eval(tmp);
  }
  return runGame(rules, question, trueAnswer);
};
