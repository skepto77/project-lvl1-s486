import { runGame, getRandomInt } from '..';

const gameRules = 'Answer "yes" if number even otherwise answer "no".';

const getDataGame = () => {
  const result = [];
  result.question = getRandomInt();
  result.currentAnswer = result.question % 2 === 0 ? 'yes' : 'no';
  return result;
};

runGame(gameRules, getDataGame);
export default getDataGame;
