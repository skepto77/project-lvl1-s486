import { runGame, getRandomInt, numberOfRounds } from '../index';

export const rules = 'Answer "yes" if number even otherwise answer "no".';

export const GameEvenBarain = () => {
  const question = [];
  const trueAnswer = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    question.push(getRandomInt());
    trueAnswer[i] = question[i] % 2 === 0 ? 'yes' : 'no';
  }
  return runGame(rules, question, trueAnswer);
};
