import playGame from '..';
import getRandomInteger from '../random-value';

const startMessage = 'What number is missing in the progression?';

const progressionLength = 10;

const generateProgression = (firstPoint, step, progLength) => {
  let progression = [];
  for (let i = 0; i < progLength; i += 1) {
    progression = [...progression, i * step + firstPoint];
  }
  return progression;
};

const max = 10;
const min = 0;

const getQuestionAndAnswer = () => {
  const FirstPoint = getRandomInteger(min, max);
  const Step = getRandomInteger(min, max);
  const hiddenElementIndex = getRandomInteger(min, progressionLength - 1);
  const progression = generateProgression(FirstPoint, Step, progressionLength);
  const correctAnswer = progression[hiddenElementIndex];
  progression[hiddenElementIndex] = '..';
  const question = `${progression.join(' ')}`;
  return [question, String(correctAnswer)];
};

export default () => playGame(startMessage, getQuestionAndAnswer);
