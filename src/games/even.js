import { runGame, getRandomInt } from '..';

const gameRules = 'Answer "yes" if number even otherwise answer "no".';

const isEven = value => value % 2 === 0;

const getDataGame = () => {
  const question = getRandomInt();
  const currentAnswer = isEven(question) ? 'yes' : 'no';
  return [question, currentAnswer];
};

export default () => runGame(gameRules, getDataGame);
