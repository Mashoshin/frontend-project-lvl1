import playGame from '..';
import getRandomIntegerValue from '../random-value';

const startMessage = 'What is the result of the expression?';

const operationMass = [{
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
  const firstMemberOfOperation = getRandomIntegerValue(max, min);
  const secondMemberOfOperation = getRandomIntegerValue(max, min);
  const selectOperation = getRandomIntegerValue(2, 0);
  const currentOperation = operationMass[selectOperation];
  const currentOperationName = currentOperation.sign;
  const question = `${firstMemberOfOperation}${currentOperationName}${secondMemberOfOperation}`;
  const correctAnswer = currentOperation.method(firstMemberOfOperation, secondMemberOfOperation);
  return [question, String(correctAnswer)];
};

export default () => playGame(startMessage, getQuestionAndAnswer);
