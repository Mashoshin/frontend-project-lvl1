import playGame from '..';
import getRandomInteger from '../random-value';

const startMessage = 'What is the result of the expression?';

const operations = [{
  sign: '+',
  method: (a, b) => a + b,
}, {
  sign: '-',
  method: (a, b) => a - b,
}, {
  sign: '*',
  method: (a, b) => a * b,
}];

const max = 10;
const min = 1;

const getQuestionAndAnswer = () => {
  const a = getRandomInteger(min, max);
  const b = getRandomInteger(min, max);
  const currentOperation = operations[getRandomInteger(0, operations.length - 1)];
  const currentOperationName = currentOperation.sign;
  const question = `${a}${currentOperationName}${b}`;
  const correctAnswer = currentOperation.method(a, b);
  return [question, String(correctAnswer)];
};

export default () => playGame(startMessage, getQuestionAndAnswer);
