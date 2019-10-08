import gameStart from '../index';
import getRandomIntegerValue from '../random-value';

const startMassage = 'Find the greatest common divisor of given numbers.';

const findGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return findGcd(number2, number1 % number2);
};

const max = 20;
const min = 1;

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomIntegerValue(max, min);
  const secondNumber = getRandomIntegerValue(max, min);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnsw = findGcd(firstNumber, secondNumber);
  return [question, String(correctAnsw)];
};

export default () => gameStart(startMassage, getQuestionAndAnswer);
