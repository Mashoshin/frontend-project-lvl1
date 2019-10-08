import gameStart from '../index';
import getRandomIntegerValue from '../random-value';

const startMassage = 'What is the result of the expression?';

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
  const firstNumber = getRandomIntegerValue(max, min);
  const secondNumber = getRandomIntegerValue(max, min);
  const selectOperation = Math.floor(Math.random() * operationMass.length);
  const currentOperation = operationMass[selectOperation].sign;
  const question = `${firstNumber}${currentOperation}${secondNumber}`;
  const correctAnsw = operationMass[selectOperation].method(firstNumber, secondNumber);
  return [question, String(correctAnsw)];
};

export default () => gameStart(startMassage, getQuestionAndAnswer);
