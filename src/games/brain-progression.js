import playGame from '..';
import getRandomIntegerValue from '../random-value';

const startMessage = 'What number is missing in the progression?';

const progressionLength = 10;

const generateProgression = (firstNum, step) => {
  let progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression = [...progression, i * step + firstNum];
  }
  return progression;
};

const max = 10;
const min = 0;

const getQuestionAndAnswer = () => {
  const progressionFirstPoint = getRandomIntegerValue(max, min);
  const progressionStep = getRandomIntegerValue(max, min);
  const indexOfHiddenElement = getRandomIntegerValue(progressionLength - 1, min);
  const progression = generateProgression(progressionFirstPoint, progressionStep);
  const correctAnswer = progression[indexOfHiddenElement];
  progression[indexOfHiddenElement] = '..';
  const question = `${progression.join(' ')}`;
  return [question, String(correctAnswer)];
};

export default () => playGame(startMessage, getQuestionAndAnswer);
