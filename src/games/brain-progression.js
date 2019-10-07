import gameStart from '../index';

const startMassage = 'What number is missing in the progression?';

const generateProgression = (firstNumber, step) => {
  let progression = [firstNumber];
  let nextNum = firstNumber;
  for (let i = 0; i < 10; i += 1) {
    nextNum += step;
    progression = [...progression, nextNum];
  }
  return progression;
};

const getRandomIntegerValue = (max, min) => Math.floor(Math.random() * (max - min)) + min;

const max = 10;
const min = 1;

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomIntegerValue(max, min);
  const step = getRandomIntegerValue(max, min);
  const guessNumber = getRandomIntegerValue(max, min);
  const progression = generateProgression(firstNumber, step);
  const correctAnsw = progression[guessNumber];
  progression[guessNumber] = '..';
  const question = `${progression.join(' ')}`;
  return [question, String(correctAnsw)];
};

export default () => gameStart(startMassage, getQuestionAndAnswer);
