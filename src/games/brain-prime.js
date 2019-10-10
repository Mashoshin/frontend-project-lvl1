import playGame from '..';
import getRandomIntegerValue from '../random-value';

const startMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const minDivisorForCheck = 2;
  const maxDivisorForCheck = num / 2;
  if (num < 2) {
    return false;
  }
  for (let i = minDivisorForCheck; i < maxDivisorForCheck; i += 1) {
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
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = number;
  return [question, correctAnswer];
};

export default () => playGame(startMessage, getQuestionAndAnswer);
