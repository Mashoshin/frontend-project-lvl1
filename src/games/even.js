import playGame from '..';
import getRandomInteger from '../random-value';

const startMessage = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const min = 1;
const max = 20;

const getQuestionAndAnswer = () => {
  const question = getRandomInteger(min, max);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => playGame(startMessage, getQuestionAndAnswer);
