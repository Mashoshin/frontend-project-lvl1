import playGame from '..';
import getRandomIntegerValue from '../random-value';

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
  const firstNum = getRandomIntegerValue(max, min);
  const secondNum = getRandomIntegerValue(max, min);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = findGcd(firstNum, secondNum);
  return [question, String(correctAnswer)];
};

export default () => playGame(startMessage, getQuestionAndAnswer);
