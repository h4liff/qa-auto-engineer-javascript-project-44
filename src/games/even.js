import readlineSync from 'readline-sync';
import greeting from '../cli.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (number) => number % 2 === 0;

const playEvenGame = () => {
  const username = greeting();
  const roundsCount = 3;
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  console.log(gameDescription);

  for (let i = 0; i < roundsCount; i += 1) {
    const number = getRandomNumber(1, 100);
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer.toLowerCase() !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${username}!`);
};

export default playEvenGame;
