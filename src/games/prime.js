import { getRandomInt } from '..';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getDataGame = () => {
  const result = [];
  const value = getRandomInt();
  result.currentAnswer = (value < 2) ? 'no' : 'yes';
  for (let i = 2; i < value; i += 1) {
    if (value % i === 0) {
      result.currentAnswer = 'no';
      break;
    }
  }
  result.question = `${value}`;
  return result;
};

export { gameRules, getDataGame };
