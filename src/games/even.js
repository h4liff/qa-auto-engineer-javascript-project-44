import readlineSync from 'readline-sync';
import greeting from '../cli.js'

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (number) => number % 2 === 0;

const playEvenGame = () => {
  const username = greeting();
  console.log(username)
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const roundsCount = 3;
  let correctAnswers = 0;

  for (let i = 0; i < roundsCount; i++) {
    const number = getRandomNumber(1, 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }

    console.log('Correct!');
    correctAnswers += 1;
  }

  if (correctAnswers === roundsCount) {
    console.log(`Congratulations, ${username}!`);
  }
};

export default playEvenGame;
