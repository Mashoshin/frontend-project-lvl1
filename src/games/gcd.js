import playGame from '..';
import getRandomInteger from '../random-value';

const startMessage = 'Find the greatest common divisor of given numbers.';

const findGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return findGcd(number2, number1 % number2);
};

const max = 20;
const min = 1;

const getQuestionAndAnswer = () => {
  const a = getRandomInteger(min, max);
  const b = getRandomInteger(min, max);
  const question = `${a} ${b}`;
  const correctAnswer = findGcd(a, b);
  return [question, String(correctAnswer)];
};

export default () => playGame(startMessage, getQuestionAndAnswer);
