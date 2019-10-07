import gameStart from '../index';

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

const getRandomIntegerValue = (max, min) => Math.floor(Math.random() * (max - min)) + min;

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
