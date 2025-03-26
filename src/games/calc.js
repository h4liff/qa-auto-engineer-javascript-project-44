import gameEngine from '../index.js';

const rules = 'What is the result of the expression?';

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

const getQuestionAndAnswer = () => {
  const numberFirst = getRandomNumber(0, 100);
  const numberSecond = getRandomNumber(0, 100);
  const operator = getRandomOperator();
  const question = `${numberFirst} ${operator} ${numberSecond}`;
  const correctAnswer = String(calculate(numberFirst, numberSecond, operator));
  return [question, correctAnswer];
};

const playCalcGame = () => {
  gameEngine(rules, getQuestionAndAnswer);
};

export default playCalcGame;
