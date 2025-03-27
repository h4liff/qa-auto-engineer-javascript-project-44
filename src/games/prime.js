import gameEngine from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = String(isPrime(question) ? 'yes' : 'no');
  return [question, correctAnswer];
};

const playPrimeGame = () => {
  gameEngine(rules, getQuestionAndAnswer);
};

export default playPrimeGame;
