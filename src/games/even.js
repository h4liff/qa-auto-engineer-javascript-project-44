import gameEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const isEven = () => question % 2 === 0;
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const playEvenGame = () => {
  gameEngine(rules, getQuestionAndAnswer);
};

export default playEvenGame;
