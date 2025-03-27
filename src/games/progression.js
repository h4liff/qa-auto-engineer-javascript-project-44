import gameEngine from '../index.js';

const rules = 'What number is missing in the progression?';
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getQuestionAndAnswer = () => {
  const progressionLength = getRandomNumber(5, 10);
  const progressionStart = getRandomNumber(1, 100);
  const progressionStep = getRandomNumber(1, 10);
  const progressionHiddenNumberIndex = getRandomNumber(1, progressionLength);

  const progression = [];
  progression[0] = progressionStart;
  for (let i = 1; i <= progressionLength; i += 1) {
    progression[i] = progression[i - 1] + progressionStep;
  }
  const correctAnswer = String(progression[progressionHiddenNumberIndex]);
  progression[progressionHiddenNumberIndex] = ['..'];
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const playProgressionGame = () => {
  gameEngine(rules, getQuestionAndAnswer);
};

export default playProgressionGame;
