import playGame from '..';
import getRandomIntegerValue from '../random-value';

const startMessage = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomIntegerValue(20, 1);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => playGame(startMessage, getQuestionAndAnswer);
