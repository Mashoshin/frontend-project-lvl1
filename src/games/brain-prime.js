import gameStart from '../index';
import getRandomIntegerValue from '../random-value';

const startMassage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const numberCheck = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const max = 20;
const min = 1;

const getQuestionAndAnswer = () => {
  const number = getRandomIntegerValue(max, min);
  const correctAnsw = numberCheck(number) ? 'yes' : 'no';
  const question = `${number}`;
  return [question, correctAnsw];
};

export default () => gameStart(startMassage, getQuestionAndAnswer);
