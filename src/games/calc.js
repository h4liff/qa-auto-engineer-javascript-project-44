import readlineSync from 'readline-sync';
import greeting from '../cli.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const calculate = (numberFirst, numberSecond, operator) => {
  switch (operator) {
    case '+':
      return numberFirst + numberSecond;
    case '-':
      return numberFirst - numberSecond;
    case '*':
      return numberFirst * numberSecond;
    default:
      throw new Error(`Unsupported operator: ${operator}`);
  }
};

const playCalcGame = () => {
  const username = greeting();
  const roundsCount = 3;
  const gameDescription = 'What is the result of the expression?';

  console.log(gameDescription);

  for (let i = 0; i < roundsCount; i += 1) {
    const numberFirst = getRandomNumber(0, 100);
    const numberSecond = getRandomNumber(0, 100);
    const operator = getRandomOperator();
    const correctAnswer = calculate(numberFirst, numberSecond, operator);

    console.log(`Question: ${numberFirst} ${operator} ${numberSecond}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${username}!`);
};

export default playCalcGame;
