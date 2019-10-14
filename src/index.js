import readlineSync from 'readline-sync';

const questionsCount = 3;

const playGame = (startMessage, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(startMessage);
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName} !`);
  for (let i = 0; i < questionsCount; i += 1) {
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


export default playGame;
