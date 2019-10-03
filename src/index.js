import readlineSync from 'readline-sync';


const questionCounter = 3;

const defineEven = (number) => number % 2 === 0;

const getRandomIntegerValue = (max, min) => Math.floor(Math.random() * (max - min)) + min;

const getQuestionAndAnswer = () => {
  const question = getRandomIntegerValue(20, 1);
  const correctAnsw = defineEven(question) ? 'yes' : 'no';
  return [question, correctAnsw];
};

const brainEvenStart = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName} !`);
  for (let i = 0; i < questionCounter; i = i + 1){  
    const [question, correctAnswer] = getQuestionAndAnswer();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}`);
};


export default brainEvenStart;
