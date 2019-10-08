import gameStart from '../index';
import getRandomIntegerValue from '../random-value';

const startMassage = 'Answer "yes" if the number is even, otherwise answer "no"';

const defineEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomIntegerValue(20, 1);
  const correctAnsw = defineEven(question) ? 'yes' : 'no';
  return [question, correctAnsw];
};

export default () => gameStart(startMassage, getQuestionAndAnswer);
